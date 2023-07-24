import './common/styles/_base.css'
import { AboutPage } from '@pages/AboutPage/AboutPage'
import { HomePage } from '@pages/HomePage/HomePage'
import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}
