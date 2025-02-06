import React from 'react'
import { useRef } from 'react'
const AlertForm = () => {
    const inputRef = useRef(null)
  return (
    <div>
      <h1>Alert Form</h1>
      <form>
        <input type="text" ref={inputRef} placeholder='Enter your alert' />
        <button onClick={() => alert(inputRef.current.value)}>Alert</button>
      </form>
    </div>
  )
}

export default AlertForm
