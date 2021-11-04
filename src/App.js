import React, { useState } from 'react'

function App() {
  const [likes, setlikes] = useState(0)
  const [value, setValue] = useState('input text')

  const increment = function() {
    setlikes(likes + 1)
  }
  const decrement = function() {
    setlikes(likes - 1)
  }
  
  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input type="text" value={value} />
      <button onClick = {increment}>Increment</button>
      <button onClick = {decrement}>Decrement</button>
    </div>
  );
}

export default App;
