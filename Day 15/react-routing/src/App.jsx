import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import Footer from './pages/Footer';
import Blog from './pages/blog/Blog';
import Post from './pages/blog/Post';
function App() {
  return (
    <Router>
      <nav className='app'>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/blog">Blog Page</Link>
      </nav>
      <Routes>
        <Route path='/' element = { <Home /> } />
        <Route path='/about' element = { <About /> } />
        <Route path='/contact' element = { <Contact /> } />
        <Route path='/blog' element = { <Blog /> } />
        <Route path='/blog/:postId' element = { <Post /> } />
        <Route path='/*' element = { <h1 style={{color:"#282c34", textAlign:"center", marginTop:"100px"}}>404 Page Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;