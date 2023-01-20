import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 14%;
  `

const AccountSwitchingCard = ({userDetails}) => {
  return (
    <Container>
      
        {userDetails?.map((user,idx)=>{
          return <p key={idx}>{user.name}</p>
        })}
  
    </Container>
  )
}

export default AccountSwitchingCard