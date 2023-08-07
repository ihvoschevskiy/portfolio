import './FeedbackForm.css'
import cn from 'classnames'
import React, { FC } from 'react'
import { TextArea } from '../TextArea/TextArea'
import { TextField } from '../TextField/TextField'

interface IProps {
  className?: string
}

const onSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
}

export const FeedbackForm: FC<IProps> = ({ className }) => {
  return (
    <form className={cn('feedback', className)} onSubmit={onSendMessage}>
      <TextField name="name" placeholder="your name" className="feedback__field" />
      <TextField name="email" placeholder="your email address" className="feedback__field" />
      <TextArea className="feedback__field" />
      <button className="feedback__submit">send message</button>
    </form>
  )
}
