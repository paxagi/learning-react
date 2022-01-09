import React, { useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/modal/MyModal';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';

function App() {
  // FOR EXAMPLE
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description 1'},
    {id: 2, title: 'JS', body: 'Description 2'},
    {id: 3, title: 'JS', body: 'Description 3'},
  ])

  // HOOK STATEMENTS
  const [filter, setFilter] = useState({sort: '', query:''})
  const [modal, setModal] = useState(false)
  // CUSTOM HOOK STATEMENTS
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

    
  return (
    <div className="App">
      <MyButton
        onClick = {() => setModal(true)}
      >
        Create User
      </MyButton>
      <MyModal
        visible = {modal}
        setVisible={setModal}
      >
        <PostForm
          create = {createPost}
        />
      </MyModal>
      <hr />
      <PostFilter
        filter = {filter}
        setFilter = {setFilter}
      />
      <PostList
        posts = {sortedAndSearchedPosts}
        title = 'List of Posts'
        remove = {removePost}
      />
    </div>
  );
}

export default App;
