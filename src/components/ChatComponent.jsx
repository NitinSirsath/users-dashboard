import React,{useState} from 'react'
import {Container} from '../styles/chatComponent.style'

const ChatComponent = () => {
    const [showChatWindow, setShowChatWindow] = useState(false)

    const handleChatWindow = () => {
        setShowChatWindow((preV) => !preV)
    }

    const transitionProperties = showChatWindow ? {transform: 'translateY(30%)'} : {transform: 'translateY(100%)'}
  return (
    <Container style={transitionProperties} onClick={()=>handleChatWindow()}>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
    </Container>
  )
}

export default ChatComponent