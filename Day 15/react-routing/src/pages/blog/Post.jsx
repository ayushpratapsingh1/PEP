import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
const Post = () => {
    const {postId} = useParams();
  return (
    <Container className="mt-5 bg-light p-5">
        <div className="align-items-center row">
          <div className="col-md-6 home-img">
            <img src="https://picsum.photos/500/320" alt="About Us" className="img-fluid rounded shadow "/>
          </div>
          <div className="col-md-6">
            <h1>Viewing Post: {postId.toUpperCase()}</h1>
            <p>
            This is a blog post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
    </Container>
  )
}

export default Post
