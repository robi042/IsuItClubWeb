import React from 'react'
import AllRightReserved from './AllRightReserved'
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
      <AllRightReserved/>
    </>
  )
}

export default Layout