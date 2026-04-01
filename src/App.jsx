import Galvene from './Galvene'
import './App.css'
import Products from './components/Products'
import Modal1 from './components/Modal1'
import { useState } from 'react'
import Slider from './components/Slider'

function App() {

  let [dialog1Open,setDialog1] = useState(false);

  const handleClose = ()=>{
      setDialog1(false)
  }

  return (
    <>
      <Galvene />
      <Slider />
        <h1>Hello React</h1>
        <h2>Mācos veidot WEB aplikācijas</h2>
        <button className='btn1' onClick={()=>{setDialog1(true)}}>Hello</button>
      <Products />

      <Modal1 isOpen={dialog1Open} closeModal={handleClose}/>
    </>
  )
}

export default App
