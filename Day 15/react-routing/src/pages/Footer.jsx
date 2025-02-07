import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <style jsx>{`
        .footer {
            background-color: #282c34;
            color: beige;
            padding: 10px;
            text-align: center;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        p {
            margin: 0;
            padding: 0; 
            font-weight: 600;
        }
      `}</style>
      <p>&copy; {new Date().getFullYear()} Ayush Pratap Singh</p>
    </div>
  )
}

export default Footer
