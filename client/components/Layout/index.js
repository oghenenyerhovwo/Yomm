import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Feedback from '../Feedback'
import "./index.module.css"


const Layout = ({children}) => {
  return (
    <div className="content">
        <Header />
        {children}
        <Feedback />
        <Footer />
    </div>
  )
}

export default Layout