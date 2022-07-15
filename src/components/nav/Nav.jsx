import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {MdComputer} from 'react-icons/md'
import {BsFillChatTextFill} from 'react-icons/bs'
import {useState} from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }><FaUserCircle /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><MdComputer /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><BsFillChatTextFill /></a>
    </nav>
  )
}

export default Nav