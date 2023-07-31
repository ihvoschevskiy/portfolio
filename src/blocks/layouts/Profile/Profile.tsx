import './Profile.css'
import { Subtitle } from '@components/Subtitle/Subtitle'
import React, { FC } from 'react'

export const Profile: FC = () => {
  return (
    <section className="profile">
      <Subtitle subtitle="Profile" modifier="underlined" />
      <div className="profile__description">
        <p className="profile__text">Привет! Меня зовут Игорь, и я фронтенд разработчик</p>
        <p className="profile__text">Несколько слов о себе:</p>
        <ul className="profile__summary">
          <li className="profile__item">Пишу код разной степени кривизны</li>
          <li className="profile__item">Мне 39</li>
          <li className="profile__item">
            Искренне верю, что с помощью кода можно сделать мир лучше, а с помощью бухгалтерского учета - нет
          </li>
          <li className="profile__item">
            Думаю -&#62; Пишу код -&#62; Ловлю жуков -&#62; Ищу спасение от них -&#62; Думаю -&#62;...
          </li>
        </ul>
      </div>
    </section>
  )
}
