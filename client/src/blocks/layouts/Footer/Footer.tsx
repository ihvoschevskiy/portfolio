import './Footer.css'
import { CodeWarsIco } from '@components/Icons/CodeWarsIco'
import { GitHubIco } from '@components/Icons/GitHubIco'
import { StackOverflowIco } from '@components/Icons/StackOverflowIco'
import cn from 'classnames'
import React, { FC } from 'react'

interface IProps {
  className?: string
}

export const Footer: FC<IProps> = ({ className }) => {
  return (
    <footer className={cn('footer', className)}>
      <ul className="account__list">
        <li className="account__item">
          <a href="https://github.com/ihvoschevskiy" target="_blank" className="account__link" rel="noreferrer">
            <GitHubIco className="account__icon" />
            <span>@github.com</span>
          </a>
        </li>
        <li className="account__item">
          <a href="https://www.npmjs.com/~ihvoschevskiy" target="_blank" className="account__link" rel="noreferrer">
            <StackOverflowIco className="account__icon" />
            <span>@npmjs.com</span>
          </a>
        </li>
        <li className="account__item">
          <a
            href="https://www.codewars.com/users/ihvoschevskiy"
            target="_blank"
            className="account__link"
            rel="noreferrer"
          >
            <CodeWarsIco className="account__icon" />
            <span>@codewars.com</span>
          </a>
        </li>
      </ul>
    </footer>
  )
}
