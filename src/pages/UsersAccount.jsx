import React, {useState,useEffect} from 'react'
import {UserAccountContainer} from '../styles/usersAccount.style'
import backgroundImage from '../assets/bg.jpg'
import UserAccountCard from '../components/UserAccountCard'

const UsersAccount = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadUsersData()
    }, [])

    const loadUsersData = async () => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }
    console.log(users);
  return (
    <UserAccountContainer background={backgroundImage}>
        
        <div>
            <h2>Select an account</h2>
            <div>
                {loading ? <h2>Loading...</h2> : users.map((user) => {
                    return (
                            <UserAccountCard user={user}/>
                    )
                })} 
            </div>
        </div>

    </UserAccountContainer>
  )
}

export default UsersAccount