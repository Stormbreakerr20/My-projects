import React from 'react'
import styles from "./Nav.module.css";

function Nav() {
  return (
    <>
    <div className={`${styles.nav} container`}>
        <div className={styles.logo}>
            <img src="/images/brand_logo.png" alt="" />
        </div>
        <div className={styles.menu}>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Nav