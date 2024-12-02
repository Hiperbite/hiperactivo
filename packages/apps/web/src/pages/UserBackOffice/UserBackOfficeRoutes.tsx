import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Properties from './Properties'
import { PropertiesDetail } from './Properties/PropertiesDetail/PropertiesDetail'

export const UserBackOfficeRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="properties" element={<Properties />} />
      <Route path="properties/:id" element={<PropertiesDetail />} />
    </Routes>
  )
}
