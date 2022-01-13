import React, { useEffect, useState } from 'react';
import PostService from './API/PostService';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import Loader from './components/UI/Loader/Loader';
import MyModal from './components/UI/modal/MyModal';
import { useFetching } from './hooks/useFetching';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';


function App() {
  // FOR EXAMPLE
  const [posts, setPosts] = useState([])

  // HOOK STATEMENTS
  const [filter, setFilter] = useState({sort: '', query:''})
  const [modal, setModal] = useState(false)
  // CUSTOM HOOK STATEMENTS
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  useEffect(() => {
    fetchPosts();
  }, [])

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
        onClick = {fetchPosts}
      >
        get posts
      </MyButton>
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
      {postError && 
        <h1>ERROR!!! ${postError}</h1>}
      {
        isPostLoading
        ?
          <div
            style = {{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '50px',
            }}
          >
            <Loader />
          </div>
        :
          <PostList
            posts = {sortedAndSearchedPosts}
            title = 'List of Posts'
            remove = {removePost}
          />
      }
    </div>
  );
}

export default App;
