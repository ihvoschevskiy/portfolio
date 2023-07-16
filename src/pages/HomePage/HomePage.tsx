import './HomePage.css'
import { Footer } from '@layouts/Footer/Footer'
import { Header } from '@layouts/Header/Header'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const HomePage: FC = () => {
  return (
    <div className="grid">
      <div className="container">
        <Header></Header>
        <main className="main">
          <div className="title__wr">
            <h1 className="title__header">
              <span>M</span>y <span>P</span>ortfolio
            </h1>
          </div>
          <div className="project-categories">
            <ul className="project-categories__list">
              {['Apps', 'Cli Tools', 'Websites'].map((item, index) => (
                <li className="project-categories__item" key={index}>
                  <Link to={`/`} className="project-categories__link">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </div>
  )
}
