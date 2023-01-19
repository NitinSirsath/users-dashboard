import React from 'react'
import {Container,ImageContainer,UserName} from '../styles/userAccountCard.style'

const UserAccountCard = ({user}) => {
    
  return (
    <Container>
        <ImageContainer background={user.profilepicture}></ImageContainer>
        <UserName>{user.name}</UserName>
    </Container>
  )
}

export default UserAccountCard