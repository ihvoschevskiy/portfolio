import './FeedbackForm.css'
import { TInputs } from '@features/Feedback/types/types'
import { emailSchema, nameSchema } from '@features/Feedback/validation/validation.schema'
import cn from 'classnames'
import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SubmitButton } from '../SubmitButton/SubmitButton'
import { TextArea } from '../TextArea/TextArea'
import { TextField } from '../TextField/TextField'

interface IProps {
  className?: string
}

export const FeedbackForm: FC<IProps> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSendMessage: SubmitHandler<TInputs> = data => {
    console.log(data)
  }

  return (
    <form className={cn('feedback', className)} onSubmit={handleSubmit(onSendMessage)} autoComplete="off">
      <TextField
        register={register}
        validateSchema={nameSchema}
        errors={errors}
        name="name"
        placeholder="your name"
        autofocus
        className="feedback__field"
      />
      <TextField
        register={register}
        validateSchema={emailSchema}
        errors={errors}
        name="email"
        placeholder="your email address"
        className="feedback__field"
      />
      <TextArea register={register} errors={errors} name="message" className="feedback__field" />
      <SubmitButton />
    </form>
  )
}
