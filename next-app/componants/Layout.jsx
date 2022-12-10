import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import NavbarUp from './NavbarUp'

const Layout = ({children}) => {
  return (
    <>
      <NavbarUp/>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout