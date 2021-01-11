import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';

import Posts from './Posts/Posts';
import Post from '../../components/Post/Post';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});


class Blog extends Component {
  state = {
    auth: true
  }

  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink 
                to='/posts'
                exact
                activeClassName="my-active"
                activeStyle={{
                  color: '#af00bd',
                  textDecoration: 'underline'
                }}>Posts
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
        <Switch>{/* Load a single route with Switch */}
          { this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} /> : null }
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found</h1> }/>{/* 404 cases */}
{/*           <Redirect from="/" to="/posts" /> */}
          {/* <Route path="/" component={Posts} /> */}
        </Switch>
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