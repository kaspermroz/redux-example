import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postsActions from '../actions/postsActions';

const Container = ({
    _getPosts,
    _posts,
    _fetching,
    _fetched,
    _error,
  }) => {
  useEffect(() => {
    _getPosts();
  }, [_getPosts]);

  const posts = _posts.map(post => (
    <article key={`${post.userId}_${post.id}`}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  ));

  return (
    <div>
      {posts}
    </div>
  )
};

const mapStateToProps = ({ posts }) => ({
  _posts: posts.posts,
  _fetching: posts.fetching,
  _fetched: posts.fetched,
  _error: posts.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(postsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Container);
