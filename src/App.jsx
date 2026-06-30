import { useState } from 'react'
import './App.css'
import Pr from './Pr'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pr/>
    </>
  )
}

export default App
