import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'
import { post } from '../constants/propShapes';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '8px 0',
  },
});

const Content = ({ posts }) => {
  const classes = useStyles();

  const content = posts.map((post) => (
    <Card
      key={`${post.userId}_${post.id}`}
      className={classes.root}
    >
      <CardContent>
        <Typography variant="h5" component="h2">{post.title}</Typography>
        <Typography variant="body2" component="p">{post.body}</Typography>
      </CardContent>
    </Card>
  ));

  return (
    <>
      {content}
    </>
  )
};

Content.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(post))
};

export default Content;