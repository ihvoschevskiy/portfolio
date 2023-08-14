import './FeedbackForm.css'
import { Modal } from '@components/Modal/Modal'
import { TInputs, TSuccess } from '@features/Feedback/types/types'
import { emailSchema, nameSchema } from '@features/Feedback/validation/validation.schema'
import { TSavedColorSchema } from '@features/ThemeSwitcher/types/types'
import { getSavedScheme, getSystemScheme } from '@features/ThemeSwitcher/utils/themeSwitcher.utils'
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

  const [theme, setTheme] = React.useState<TSavedColorSchema | undefined>()
  const [isShownModal, setIsShownModal] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState<TSuccess>('success')

  React.useEffect(() => {
    const savedScheme = getSavedScheme()
    setTheme(savedScheme === null ? getSystemScheme : savedScheme)
  }, [isShownModal])

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) reset({ name: '', email: '', message: '' })
  }, [formState, isSubmitSuccessful, reset])

  const onSendMessage: SubmitHandler<TInputs> = async data => {
    if (!process.env.API) return

    await fetch(process.env.API, {
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
      {theme && (
        <Modal
          theme={theme}
          isShown={isShownModal}
          isSuccess={isSuccess}
          onClose={() => {
            setIsShownModal(false)
          }}
        />
      )}

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
