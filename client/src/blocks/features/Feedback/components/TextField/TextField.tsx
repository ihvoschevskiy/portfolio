import './TextField.css'
import { TInputs, TValidateSchema } from '@features/Feedback/types/types'
import cn from 'classnames'
import React, { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface IProps {
  name: string
  placeholder: string
  autofocus?: boolean
  className?: string
  validateSchema: TValidateSchema
  errors: FieldErrors<TInputs>
  register: UseFormRegister<TInputs>
}

export const TextField: FC<IProps> = ({
  name,
  autofocus,
  placeholder,
  className,
  validateSchema,
  errors,
  register,
}) => {
  return (
    <label className={cn('text-field', className, { 'text-field__error': errors[name] })}>
      <input
        {...register(name, validateSchema)}
        type="text"
        placeholder={placeholder}
        className="text-field__input"
        autoFocus={autofocus}
      />
      {errors[name] && (
        <div className="text-field__error-wr">
          <p className="text-field__error-msg">{errors[name]?.message}</p>
        </div>
      )}
    </label>
  )
}
