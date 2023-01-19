import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetails = ({usersData,setUsersData}) => {

    const { id } = useParams();
  const [user, setUser] = useState({})


  const userDetails = usersData.find((user) => {
    return Number(user.id) === Number(id);
  });

  console.log(userDetails);
    
//   useEffect(() => {
//     loadUser()
//   },[])

//     const loadUser = async () => {
//         const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/${id}`);
//         const data = await response.json();
//         setUser(data);
//     }
//     console.log(user,'user');
  return (
    <div>{userDetails.name}</div>
  )
}

export default UserDetails