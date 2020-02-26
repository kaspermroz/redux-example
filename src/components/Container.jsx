import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postsActions from '../redux/posts/actions';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Content from './Content';
import { post } from '../constants/propShapes';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  progressRoot: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Container = (
  {
    _getPosts,
    _getPostsSaga,
    _posts,
    _loading,
    _success,
    _error,
  }
) => {
  const classes = useStyles();

  useEffect(() => {
    _getPosts();
    // _getPostsSaga();
  }, [_getPosts, _getPostsSaga]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Redux example
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          {_loading && <div className={classes.progressRoot}>
            <CircularProgress variant="indeterminate" size={100}/>
          </div>}
          {_success && <Content posts={_posts} />}
          {_error && <div>
            <p>Error :(</p>
          </div>}
      </main>
    </div>
  );
};


const mapStateToProps = ({ posts }) => ({
  _posts: posts.data,
  _loading: posts.loading,
  _success: posts.success,
  _error: posts.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(postsActions, dispatch);

Container.propTypes = {
  _posts: PropTypes.arrayOf(PropTypes.shape(post)).isRequired,
  _loading: PropTypes.bool.isRequired,
  _success: PropTypes.bool.isRequired,
  _error: PropTypes.any,
  _getPosts: PropTypes.func.isRequired,
  _getPostsSaga: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
