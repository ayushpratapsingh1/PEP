import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container className="mt-5 bg-light p-5">
      <style jsx>{`
        .home-img {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .home-img img {
          transition: transform 0.5s;
        }
        .home-img img:hover {
          transform: scale(1.1);
        }`
      }</style>
      <div className="row">
        <div className="col-md-6 home-img">
          <img src="https://picsum.photos/500/320" alt="About Us" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default About
