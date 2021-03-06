import React from 'react';

class Post extends React.Component {
  render () {
    let post = this.props.post
    return (
      <div>
        <h2>{post.title}, by {post.user.name}, on {post.date.split(' ')[0]}</h2>
        <p>{post.content}</p>
      </div>
    )
  }
}

export default Post;
