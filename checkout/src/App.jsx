import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import Checkout from "./components/Checkout"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Checkout></Checkout>
    </div>
  )
}

export default App
