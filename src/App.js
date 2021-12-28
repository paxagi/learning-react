import React, { useMemo, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
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

  function getSortedPost() {
    
  }

  const sortedPosts = useMemo(() => { 
    console.log('getSortedPost is worked')
    if (filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [sortedPosts, filter.query])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

    
  return (
    <div className="App">
      <PostForm
        create = {createPost}
      />
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
