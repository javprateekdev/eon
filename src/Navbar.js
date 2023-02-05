import React, { useState } from "react"


import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <img src="https://i.imgur.com/rPXJoVq.jpg" style={{height:"70px"}}/>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <div className='home'>
            <li>Home</li>
          </div>
          <div className='about'>
            <li>Price</li>
          </div>
          <div className='services'>
            <li>Site And Floor Plan</li>
          </div>
          <div className='skills'>
            <li>Ammenities</li>
          </div>
          <div className='home'>
            <li>Location</li>
          </div>
          <div className='home'>
            <li>Virtual Site Tour</li>
          </div>
          <div className='home'>
            <li>Brochure</li>
          </div>

        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar
