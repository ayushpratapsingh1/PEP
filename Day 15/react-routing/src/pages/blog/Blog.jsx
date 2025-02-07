import React from 'react'
import { Container } from 'react-bootstrap';
import {Link,Outlet} from 'react-router-dom';
const blog = () => {
  return (
    <Container className="mt-5 bg-light p-5">
        <style jsc>{`
        h1 {
          text-align: center;
          margin-bottom: 20px;
        }
        nav {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 20px;
        }
        nav a {
          background-color: #282c34;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.5s;
        }
        nav a:hover {
          background-color: #61dafb;
          color: #282c34;
        }
        `}</style>
      <h1>Blog</h1>
      <nav>
        <Link to="post1">Blog Post 1</Link>
        <Link to="post2">Blog Post 2</Link>
      </nav>
      <Outlet />
    </Container>
  )
}

export default blog
