import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
        <MyInput
          placeholder = 'for searching'
          value = {filter.query}
          onChange = {e => setFilter({...filter, query: e.target.value})}
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue = 'Sort of'
          options={[
            {value: 'title', name: 'of title'},
            {value: 'body', name: 'of body'},
          ]}
        />
      </div>
  )
}

export default PostFilter
