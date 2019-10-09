import React from 'react';
import { fetchPosts } from './RedditApi';
import Loading from './Loading';
import PostCard from './PostCard';
import { Switch, Route, NavLink, Link } from 'react-router-dom';
import MemberCard from './MemberCard';
import MemberPage from './MemberPage';

export default class CatsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    };
  }
  async componentDidMount() {
    console.log('mounted')
    let posts = await fetchPosts('cats');
    this.setState({ posts, loading: false });
  }
  render() {
    return (
        <div className="posts">
          {this.state.loading ? <Loading /> : this.state.posts.data.children.map((post) => {
            return (
              <Link to={`/authors/${post.data.author}`} key={post.data.author} >
                <PostCard post={post} />
                </Link>
            );
          })}
            <Route path="/authors/:author" component={MemberPage}></Route>
      </div>
    );
  }
}
