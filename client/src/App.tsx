import './common/styles/_base.css'
import { useAdaptive } from '@common/hooks/useAdaptive'
import { projects } from '@data/app.data'
import { AboutPage } from '@pages/AboutPage/AboutPage'
import { ContactsPage } from '@pages/ContactsPage/ContactsPage'
import { HomePage } from '@pages/HomePage/HomePage'
import { ProjectPage } from '@pages/ProjectPage/ProjectPage'
import { ProjectsIndexPage } from '@pages/ProjectsIndexPage/ProjectsIndexPage'
import { TLayout } from '@tps/app.types'
import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

export const LayoutContext = React.createContext<TLayout | null>(null)

export const App: FC = () => {
  const layout = useAdaptive()

  return (
    <LayoutContext.Provider value={layout}>
      <Routes>
        <Route path="/" element={<HomePage data={projects} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/:id" element={<ProjectPage data={projects} />} />
        <Route path="/projects" element={<ProjectsIndexPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </LayoutContext.Provider>
  )
}
