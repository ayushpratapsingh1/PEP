import './App.css'

function App() {

  return (
    <div className="container">
    <header>
      <img
        src="images/5.jpg"
        alt="Ayush Pratap Singh"
        className="profile-img"
      />
      <h1 className='profile-name'>Ayush Pratap Singh</h1>
      <p>React Web Developer</p>
    </header>
    <section id="about">
      <h2>About Me</h2>
      <p>
        I am a passionate React developer specializing in creating interactive and
        responsive web applications.
      </p>
    </section>
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>AI Study Assistant</h3>
        <p>
          Built a smart AI-powered study tool with React.js, Vite, and Tailwind
          CSS.
        </p>
      </div>
      <div className="project">
        <h3>Portfolio Website</h3>
        <p>
          Developed a personal portfolio using Next.js, TypeScript, and Tailwind
          CSS.
        </p>
      </div>
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <p>Email: ayush@example.com</p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/ayushpratap" target="_blank">
          github.com/ayushpratap
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a href="https://linkedin.com/in/ayushpratap" target="_blank">
          linkedin.com/in/ayushpratap
        </a>
      </p>
    </section>
    <footer>
      <p>© 2025 Ayush Pratap Singh</p>
    </footer>
  </div>
  )
}

export default App
