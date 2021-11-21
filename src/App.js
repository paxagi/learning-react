import React, { useState } from 'react'
import MyButton from './components/UI/button/MyButton';
import PostList from './components/PostList';
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description 1'},
    {id: 2, title: 'JS', body: 'Description 2'},
    {id: 3, title: 'JS', body: 'Description 3'},
  ])
  
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="post title" />
        <input type="text" placeholder="post description" />
        <MyButton disabled>Make post</MyButton>
      </form>
      <PostList posts = {posts} title = 'List of Posts' />
    </div>
  );
}

export default App;
