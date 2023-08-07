import './Script.css'
import cn from 'classnames'
import React, { FC } from 'react'

interface IProps {
  className?: string
}

export const Script: FC<IProps> = ({ className }) => {
  return (
    <section className={cn('script', className)}>
      <p className="script__code">
        <span>if (</span> youWantToWorkWithMe <span>===</span> true <span>&#124;&#124; </span>youHaveAQuestion{' '}
        <span>===</span> true <span>) &#123;</span>
      </p>
      <p className="script__code script__code--indent">
        fillFeedbackForm<span>()</span>
      </p>
      <p className="script__code script__code--indent">
        clickSendMessageButton<span>()</span>
      </p>
      <p className="script__code">
        <span>&#125; else &#123;</span>
      </p>
      <p className="script__code script__code--indent">
        <span>console</span>.log(‘Thank you for your attention’)
      </p>
      <p className="script__code">
        <span>&#125;</span>
      </p>
    </section>
  )
}
