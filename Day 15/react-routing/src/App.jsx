import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import Footer from './pages/Footer';
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
      <Routes>
        <Route path='/' element = { <Home /> } />
        <Route path='/about' element = { <About /> } />
        <Route path='/contact' element = { <Contact /> } />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;