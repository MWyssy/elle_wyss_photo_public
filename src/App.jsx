import './Styles/App.css'
import Nav from './components/Nav'
import About from './pages/About'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

 
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
