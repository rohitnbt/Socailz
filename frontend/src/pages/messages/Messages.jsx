import React from 'react'
import "./style.scss"
import { MessagesMain } from './messagesMain/MessagesMain'
import { MessagesContent } from './messagesContent/MessagesContent'

export const Messages = () => {
  return (
    <div className='Messages-page'>
        <MessagesMain />
        <MessagesContent />
    </div>
  )
}
