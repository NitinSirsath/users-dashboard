import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import UserDetails from './pages/UserDetails'
import UsersAccount from './pages/UsersAccount'

function App() {
  const [count, setCount] = useState(0)
  const [usersData, setUsersData] = useState([]);

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <UsersAccount  usersData={usersData} setUsersData={setUsersData}/> } />
      <Route path="/user/:id" element={<UserDetails  usersData={usersData} setUsersData={setUsersData}/>} />
      </Routes>
    </div>
  )
}

export default App
