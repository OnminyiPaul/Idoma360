import { useState } from 'react'
import bgImage from "./images/home1.png";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'typeface-inter';
import './App.css'
import Home from './components/home'
import IdomaCulture from './components/idoma-culture'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
      <IdomaCulture></IdomaCulture>
    </>
  )
}

export default App
