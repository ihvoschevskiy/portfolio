import './TextArea.css'
import { TInputs } from '@features/Feedback/types/types'
import { messageSchema } from '@features/Feedback/validation/validation.schema'
import cn from 'classnames'
import React, { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface IProps {
  name: string
  className?: string
  errors: FieldErrors<TInputs>
  register: UseFormRegister<TInputs>
}

export const TextArea: FC<IProps> = ({ name, className, errors, register }) => {
  return (
    <label className={cn('text-area', className, { 'text-area__error': errors[name] })}>
      <textarea
        {...register(name, messageSchema)}
        placeholder="how can i help you?"
        cols={20}
        rows={8}
        className="text-area__area"
      />
      {errors[name] && (
        <div className="text-area__error-wr">
          <p className="text-area__error-msg">{errors[name]?.message}</p>
        </div>
      )}
    </label>
  )
}
