import { useState } from "react"
import Link from 'next/link'
import React from 'react'
import styles from "./index.module.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaTimes } from "react-icons/fa"

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false)

  const handleToggle = () => {
    setToggleNav(prevToggle => !prevToggle)
  }

  return (
    <div className="container ">
        <div className={`${styles.nav_container}`}>
          <div className={`flex ${styles.nav}`}>
            <div className={styles.brand}>
              <h2>YOMM</h2>
              {/* <Image src="/logo.png" width="128" height="77" alt="logo" /> */}
            </div>
            <nav className={`${styles.nav_items}`}>
              <Link href="/"><a className={`${styles.nav_links}`}>Home</a></Link>
              <Link href="/about"><a className={`${styles.nav_links}`}>About</a></Link>
              <Link href="/ninjas"><a className={`${styles.nav_links}`}>Faq</a></Link>
            </nav>
            
            <div onClick={handleToggle} className={`${styles.menu_icon}`}>
                  {!toggleNav ? <GiHamburgerMenu /> : <FaTimes />}
            </div>   
            {
              toggleNav && (
                <nav className={`${styles.nav_items_small}`}>
                      <Link href="/"><a className="spacing-sm">Home</a></Link>
                      <Link href="/about"><a className="spacing-sm">About</a></Link>
                      <Link href="/ninjas"><a className="spacing-sm">Ninja Listing</a></Link>
                </nav>
              )
            }
          </div>
      </div>
    </div>
  )
}

export default Header