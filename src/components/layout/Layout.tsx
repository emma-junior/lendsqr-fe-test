import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import "./layout.scss"

const Layout = () => {
  return (
    <section className='layout'>
        <Navbar />
        <div className='sidebar-outlet'>
            <Sidebar />
            <div className='outlet'>
                <Outlet />
            </div>
        </div>
    </section>
  )
}

export default Layout