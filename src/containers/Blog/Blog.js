import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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
              <li><a href="/">Home</a></li>
              <li><a href="/new-post">New Post</a></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={() => <Posts/>} />
        <Route path="/new-post" exact render={() => <NewPost/>} />
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