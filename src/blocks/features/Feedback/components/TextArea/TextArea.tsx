import './TextArea.css'
import cn from 'classnames'
import React, { FC } from 'react'

interface IProps {
  className?: string
}

export const TextArea: FC<IProps> = ({ className }) => {
  return (
    <label className={cn('text-area', className)}>
      <textarea name="message-area" placeholder="how can i help you?" cols={20} rows={8} className="text-area__area" />
    </label>
  )
}
