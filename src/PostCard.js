import React from 'react';
import MemberCard from './MemberCard.js';
import { BrowserRouter as Router, Route, NavLink, Switch, Link } from 'react-router-dom';

export default function PostCard(props) {
  let {url, title, author, num_comments, ups, is_self, preview} = props.post.data;
  let goto = '../author/' + props.post.data.author;
  console.log(goto)
  console.log(goto)
  return <div><div className="repoCard"><h1>{title}</h1><p>By {author}</p><p>Comments: {num_comments}</p><p>Upvotes: {ups}</p><p>{preview ? 'Is an image post' : 'Not an image post'}</p></div></div>
}
