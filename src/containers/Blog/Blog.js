import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Posts from './Posts/Posts';
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink 
                to='/' 
                exact
                activeClassName="my-active"
                activeStyle={{
                  color: '#af00bd',
                  textDecoration: 'underline'
                }}>Home
              </NavLink></li>
              <li><NavLink 
                to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}>New Post
              </NavLink></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        {/* {Route path="/post:id"} */}
        <Route path="/new-post" exact component={NewPost} />
        {/* localhost:3000 => posts component */}
        {/* <Posts/> */}
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;