import './Footer.css'
import { CodeWarsIco } from '@components/Icons/CodeWarsIco'
import { GitHubIco } from '@components/Icons/GitHubIco'
import { StackOverflowIco } from '@components/Icons/StackOverflowIco'
import React, { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="caption">
        <div className="caption__wr">
          <span className="caption__fname">Igor`</span>
          <span className="caption__lname">Hvoschevskiy</span>
          <span className="caption__role">Frontend Developer</span>
        </div>
      </div>
      <ul className="account__list">
        <li className="account__item">
          <a href="" className="account__link">
            <GitHubIco />
            <span>@github.com</span>
          </a>
        </li>
        <li className="account__item">
          <a href="" className="account__link">
            <CodeWarsIco />
            <span>@codewars.com</span>
          </a>
        </li>
        <li className="account__item">
          <a href="" className="account__link">
            <StackOverflowIco />
            <span>@ru.stackoverflow.com</span>
          </a>
        </li>
      </ul>
    </footer>
  )
}
