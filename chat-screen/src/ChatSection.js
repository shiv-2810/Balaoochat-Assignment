import React from 'react'
import Chats from './Chats'
import './ChatSection.css'
function ChatSection() {
  return (
    <div className='chatSection'>
       <div className='chatSection__msg'>
        <Chats />
       </div>
    </div>
  )
}

export default ChatSection