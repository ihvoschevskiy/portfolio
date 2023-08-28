import './common/styles/_base.css'
import { projects } from '@data/app.data'
import { AboutPage } from '@pages/AboutPage/AboutPage'
import { ContactsPage } from '@pages/ContactsPage/ContactsPage'
import { HomePage } from '@pages/HomePage/HomePage'
import { ProjectPage } from '@pages/ProjectPage/ProjectPage'
import { ProjectsIndexPage } from '@pages/ProjectsIndexPage/ProjectsIndexPage'
import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage data={projects} />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects/:id" element={<ProjectPage data={projects} />} />
      <Route path="/projects" element={<ProjectsIndexPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
