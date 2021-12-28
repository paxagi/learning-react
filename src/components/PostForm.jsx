import React, {useState} from 'react'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {

  /** my utils */
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
    setPost(values.emptyPost)
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost)
  }

  return (
    <div>
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
    </div>
  )
}

export default PostForm
