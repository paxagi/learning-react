import React, { useState, useRef } from 'react'
import './styles/App.css'
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description 1'},
    {id: 2, title: 'JS', body: 'Description 2'},
    {id: 3, title: 'JS', body: 'Description 3'},
  ])

  const values = {
    get emptyPost() {
      return {
        title: '',
        body: '',
      }
    }
  }

  const [post, setPost] = useState(values.emptyPost)

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now() }])
    setPost(values.emptyPost)
  }
  
  return (
    <div className="App">
      <form>
        <MyInput 
          value = {post.title}
          onChange = {e => setPost( {...post, title: e.target.value} )}
          
          type = "text" 
          placeholder = "post title" 
        />
        <MyInput 
          value = {post.body}
          onChange = {e => setPost( {...post, body: e.target.value} )}
          
          type = "text" 
          placeholder = "post description" 
        />
        <MyButton onClick = {addNewPost} >Make post</MyButton>
      </form>
      <PostList posts = {posts} title = 'List of Posts' />
    </div>
  );
}

export default App;
