import './NotFoundPage.css'
import React, { FC } from 'react'
export const NotFoundPage: FC = () => {
  return (
    <section className="not-found">
      <h1 className="title not-found__title">404</h1>
      <p className="not-found__description">В следующий раз обязательно получится</p>
    </section>
  )
}
