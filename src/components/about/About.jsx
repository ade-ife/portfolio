import React from 'react'
import './about.css'
import aboutMe from '../../assets/me.webp'
import {FaAward} from 'react-icons/fa'
import {FaLaptopCode} from 'react-icons/fa'
import {BiBookOpen} from 'react-icons/bi'


const About = () => {
  return (
    <section id='about'>
      <h5 className='text-light'>Get To Know</h5>
      <h2 className='text-light'>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={aboutMe} alt="About Me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Years Work Experience</small>
              </article>
              <article className="about__card">
                <FaLaptopCode  className='about__icon'/>
                <h5>Languages</h5>
                <small>5+ Languages</small>
              </article>
              <article className="about__card">
                <BiBookOpen className='about__icon'/>
                <h5>Frameworks</h5>
                <small>10+ Frameworks</small>
              </article>
            </div>
            <p>
            A software engineering graduate with fundamental knowledge of
            software design and development plus gainful experience in back-end
            development, developer relations and IT Infrastructure management.
            </p>
            <a href="#contact" className="btn btn-primary">Let's talk.</a>
          </div>
        </div>
    </section>
  )
}

export default About