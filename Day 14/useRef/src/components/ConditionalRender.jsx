import React from 'react'

const ConditionalRender = () => {
    const isLoggedIn = true
  return (
    <div>
        <h1>Conditional Render</h1>
        {/* {isLoggedIn ? <h2>Logged In</h2> : <h2>Not Logged In</h2>} */}
        
        {/* {isLoggedIn && <h2>Logged In</h2>}
        {!isLoggedIn && <h2>Not Logged In</h2>} */}

        {/* {isLoggedIn ? userGreeting() : guestGreeting()} */}
        {isLoggedIn ? <userGreeting /> : <guestGreeting />}
    </div>
  )
  function userGreeting() {
      return <h1>Welcome, user</h1>;
  }
  function guestGreeting() {
    return <h1>Please sign up.</h1>;
  }
}

export default ConditionalRender
