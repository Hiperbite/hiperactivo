import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Dashboard from './Dashboard'
import Properties from './Properties'

export const UserBackOffice = () => {
    return (

            <Routes>
                <Route path="sas" element={<Properties />} />
                <Route path="/dashboard/properties" element={<Properties />} />
                {/* More nested routes under Layout 
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
            */}
            </Routes>

    )
}
