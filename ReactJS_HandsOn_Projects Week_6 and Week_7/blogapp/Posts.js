import React, { Component } from 'react';

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => alert("Error fetching posts: " + error));
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Posts;
