import './Styles/App.css'
import Nav from './components/Nav.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Showreel from './pages/Showreel.jsx'

function App() {
  const [couples, setCouples] = useState([])

    useEffect(() => {
        const fetchCouples = async () => {
            try {
                const result = await axios(
                    `${import.meta.env.VITE_ELLE_WYSS_PHOTO_API_ENDPOINT}/portfolio`, 
                    {withCredentials: true}
                );
    
                setCouples(result.data.couples);
            }
            catch (error) {
            console.error("Error fetching couples:", error)
            }
        }

        fetchCouples();
    }, []);
 
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home couples={couples}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {couples.map((couple) => {
            const { url, name } = couple
            return <Route path={url} element={<Showreel couple={couple}/>} key={name} />
          })}
        </Routes>
      </Router>
      
    </>
  )
}

export default App
