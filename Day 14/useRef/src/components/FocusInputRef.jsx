import React from 'react'
import { useRef } from 'react'

const FocusInputRef = () => {
    const inputRef = useRef(null)
    const handleFocus = () => {
        inputRef.current.focus()
    }
  return (
    <div>
        <input type="text" ref={inputRef} placeholder='Enter your name' />
        <button onClick={handleFocus}>Focus</button>
    </div>
  )
}

export default FocusInputRef
