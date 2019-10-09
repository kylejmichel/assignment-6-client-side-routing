import React from 'react';
import { fetchPosts } from './RedditApi';
import Loading from './Loading';
import PostCard from './PostCard';
import { Switch, Route, NavLink } from 'react-router-dom';

export default class DogsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    };
  }
  async componentDidMount() {
    console.log('mounted')
    let posts = await fetchPosts('dogs');
    this.setState({ posts, loading: false });
  }
  render() {
    return (
      <div>
        <div className="posts">
          {this.state.loading ? <Loading /> : this.state.posts.data.children.map((post) => {
            return (
                <PostCard post={post} />
            );
          })}
        </div>
      </div>
    );
  }
}
