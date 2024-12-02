import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserList } from './Users'
import { UserDetails } from './Users/UserDetails'

export const ManagerBackOfficeRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<>Dashboard</>} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:id" element={<UserDetails />} />
      <Route path="/*" element={<>Properties</>} />
    </Routes>
  )
}
