import React from 'react'
import "./sidebar.scss"
import { customers } from './data';
import { businesses } from './data';
import { settings } from './data';
import SidebarLink from './SidebarLink';
import { Link } from 'react-router-dom';

interface Props {
  sidebar:boolean
  setSidebar:React.Dispatch<React.SetStateAction<boolean>>
}
const Sidebar = ({sidebar, setSidebar}:Props) => {


  return (
    <section className='sidebar'>
      <div className='cancel-wrapper'>
        <img onClick={() => setSidebar(!sidebar)} className='cancel' width={20} src="/assets/icons/cancel.svg" alt="cancel" />
        </div>
      <div className='sidebar-wrapper'>
        <div className='switch-org'>
          <img src="/assets/icons/briefcase.svg" alt="briefcase" />
          <span>Switch Organisation</span>
          <img src='/assets/icons/arrowdown.svg' alt='arrow' />
        </div>
        <div className='dashboard'>
          <img src='/assets/icons/home.svg' alt='home' />
          <span>Dashboard</span>
        </div>
        <ul>
          <p>CUSTOMERS</p>
          <SidebarLink data={customers} />
          <p>BUSINESSES</p>
          <SidebarLink data={businesses} />
          <p>SETTINGS</p>
          <SidebarLink data={settings} />
        </ul>
        <hr />
        <Link className='logout-link' to="/login">
          <div className='logout'>
            <img src='/assets/icons/sign-out.svg' alt='signout' />
            <span>Logout</span>
          </div>
        </Link>
        <p>v1.2.0</p>
      </div>
    </section>
  )
}

export default Sidebar