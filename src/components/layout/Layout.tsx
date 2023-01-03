import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import "./layout.scss"
import useWindowSize from '../../hooks/useWindowSize';


const Layout = () => {
  const [sidebar, setSidebar] = useState<boolean>(false)

  const windowSize = useWindowSize()

  useEffect(() => {
    if(windowSize.width >= 768) {
      setSidebar(true)
    }else{
      setSidebar(false)
    }
  },[windowSize])

  return (
    <section className='layout'>
        <Navbar sidebar={sidebar} setSidebar={setSidebar} />
        <div className='sidebar-outlet'>
            {sidebar && <div className='sidebar-container'><Sidebar sidebar={sidebar} setSidebar={setSidebar} /></div>}
            <div className='outlet'>
                <Outlet />
            </div>
        </div>
    </section>
  )
}

export default Layout