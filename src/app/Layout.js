import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'



const Layout = () => {
    return (

        <div>
            <NavBar />
            <section>
                <Outlet />
            </section>
        </div>
    )
}

export default Layout