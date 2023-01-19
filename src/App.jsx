import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import UsersAccount from './pages/UsersAccount'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <UsersAccount /> } />
      </Routes>
    </div>
  )
}

export default App
