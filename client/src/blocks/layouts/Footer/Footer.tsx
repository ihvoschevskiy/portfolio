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
            <GitHubIco />
            <span>@github.com</span>
          </a>
        </li>
        <li className="account__item">
          <a
            href="https://www.codewars.com/users/ihvoschevskiy"
            target="_blank"
            className="account__link"
            rel="noreferrer"
          >
            <CodeWarsIco />
            <span>@codewars.com</span>
          </a>
        </li>
        <li className="account__item">
          <a
            href="https://stackexchange.com/users/26948313/ihvoschevskiy?tab=top"
            target="_blank"
            className="account__link"
            rel="noreferrer"
          >
            <StackOverflowIco />
            <span>@ru.stackoverflow.com</span>
          </a>
        </li>
      </ul>
    </footer>
  )
}
