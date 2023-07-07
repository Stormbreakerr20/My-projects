import React from 'react'
import './Nav.css'
export default function Nav() {
  return (
    <>
    <div className="nav">
        <div className="logo">
            <img src="./images/brand_logo.png" alt="" />
        </div>
        <div className="menu">
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/">ABOUT</a></li>
                <li><a href="/">CONTACT</a></li>
                <li><a href="/">LOCATION</a></li>
            </ul>
        </div>
        <div className="login">
            <button>Login</button>
        </div>
        </div>
    </>
  )
}
