import './FeedbackForm.css'
import { Modal } from '@components/Modal/Modal'
import { TInputs, TSuccess } from '@features/Feedback/types/types'
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
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const [isShownModal, setIsShownModal] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState<TSuccess>('success')

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) reset({ name: '', email: '', message: '' })
  }, [formState, isSubmitSuccessful, reset])

  const onSendMessage: SubmitHandler<TInputs> = async data => {
    let api: string

    process.env.NODE_ENV === 'production'
      ? (api = `${process.env.PROD_HOST}:${process.env.PORT}${process.env.ROUTE}`)
      : (api = `${process.env.DEV_HOST}:${process.env.PORT}${process.env.ROUTE}`)

    await fetch(api, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, subject: 'Feedback from portfolio site' }),
    })
      .then(() => {
        setIsShownModal(true)
      })
      .catch(() => {
        setIsSuccess('error')
        setIsShownModal(true)
      })
  }

  return (
    <>
      <Modal
        isShown={isShownModal}
        isSuccess={isSuccess}
        onClose={() => {
          setIsShownModal(false)
        }}
      />
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
    </>
  )
}
