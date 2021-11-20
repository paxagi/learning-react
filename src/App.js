import React, { useState } from 'react'
import PostItem from './components/PostItem'
import PostList from './components/PostList';
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description 1'},
    {id: 2, title: 'JS', body: 'Description 2'},
    {id: 3, title: 'JS', body: 'Description 3'},
  ])
  
  return (
    <div className = "App">
      <PostList posts = {posts} title = 'List of Posts' />
    </div>
  );
}

export default App;
