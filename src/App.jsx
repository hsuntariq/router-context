import React from 'react'
import Drilling from './PropDrilling/Drilling'
import Test from './hello/Test'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routing/pages/Home'
import Contact from './routing/pages/Contact'
import About from './routing/pages/About'
import Projects from './routing/pages/Projects'
import Services from './routing/pages/Services'
import Header from './components/Header'
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element="Page not found" />
        </Routes>
      </Router>
    </>
  )
}

export default App