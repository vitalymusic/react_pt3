
import './App.css'

import Modal1 from './components/Modal1'
import { useState } from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import ProductPage from './pages/ProductPage';


function App() {

  let [dialog1Open, setDialog1] = useState(false);

  const handleClose = () => {
    setDialog1(false)
  }

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/product/:productID" element={<ProductPage />} />

        </Routes>


       
       
        <h1>Hello React</h1>
        <h2>Mācos veidot WEB aplikācijas</h2>
        <button className='btn1' onClick={() => { setDialog1(true) }}>Hello</button>
        

        <Modal1 isOpen={dialog1Open} closeModal={handleClose} />
      </BrowserRouter>
    </>
  )
}

export default App
