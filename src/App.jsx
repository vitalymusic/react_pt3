import Galvene from './Galvene'
import './App.css'
import Products from './components/Products'
import Modal1 from './components/Modal1'
import { useState } from 'react'
import Slider from './components/Slider'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


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
          <Route path="/contact" element={<Contact />} />
        </Routes>


        <Galvene />
        <Slider />
        Carousel2
        <h1>Hello React</h1>
        <h2>Mācos veidot WEB aplikācijas</h2>
        <button className='btn1' onClick={() => { setDialog1(true) }}>Hello</button>
        <Products />

        <Modal1 isOpen={dialog1Open} closeModal={handleClose} />
      </BrowserRouter>
    </>
  )
}

export default App
