import './common/styles/_base.css'
import { AboutPage } from '@pages/AboutPage/AboutPage'
import { ContactsPage } from '@pages/ContactsPage/ContactsPage'
import { GHUsersPage } from '@pages/GHUsersPage/GHUsersPage'
import { HomePage } from '@pages/HomePage/HomePage'
import { ProjectPage } from '@pages/ProjectPage/ProjectPage'
import { ProjectsIndexPage } from '@pages/ProjectsIndexPage/ProjectsIndexPage'
import { TasksPage } from '@pages/TasksPage/TasksPage'
import { WeatherCliPage } from '@pages/WeatherCliPage/WeatherCliPage'
import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

export const App: FC = () => {
  const [data, setData] = React.useState({})
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects/weather-cli" element={<ProjectPage data={data} />} />
      <Route path="/projects/github-users" element={<GHUsersPage />} />
      <Route path="/projects/tasks" element={<TasksPage />} />
      <Route path="/projects" element={<ProjectsIndexPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
