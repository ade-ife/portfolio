import React from 'react'
import Typical from 'react-typical'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.webp'
import SocialIcons from '../socialicons/SocialIcons'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5 className='text-light'>Hello, I'm </h5>
        <h1 className='text-light'>Joshua Adeniji</h1>
        {" "}
        <h3 className="mono text-light">
          <Typical
            loop={Infinity}
            steps={[
              "Software Engineer",
              1000,
              "Backend Developer. 💻",
              1000,
              "Software Developer Advocate",
              1000,
              "Fan of Milwaukee Bucks 🏀",
              1000,
  
              ]}
            />
        </h3>
       
        <CTA />
        <SocialIcons position='header__socialicons' />
        <div className="me">
          <img src={ME} alt="Joshua Adeniji" />
        </div>
        <a href="#contact" className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}