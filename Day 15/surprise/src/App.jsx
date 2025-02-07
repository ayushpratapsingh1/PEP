import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Counter: {count}</h1>
      <p style={{ color: count >= 10 ? 'green' : count < 0 ? 'red' : 'white'}}>
      {count >= 10 ? "You reached Maximum Value" : (count < 0 ? "Negative count" : "Keep going high!")}</p>
      <div style={{ display: 'flex', justifyContent: 'center' , gap: '10px'}}>
        <button onClick={() => {
        if(count<10) 
          setCount(count + 1)
        }}>Increment</button>
        <button onClick={() => {
          if(count > -10)
            setCount(count - 1)
        }}>Decrement</button>
      </div>
    </>
  )
}

export default App
