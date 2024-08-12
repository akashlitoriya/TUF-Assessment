import React from 'react'
import Home from '../../pages/Home'
import Navbar from '../common/Navbar'
import Dashboard from '../../pages/Dashboard'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default AppLayout
