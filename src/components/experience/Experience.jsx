import React from 'react'
import './experience.css'
import {CgRadioChecked} from 'react-icons/cg'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {SiJava} from 'react-icons/si'
import {SiCsharp} from 'react-icons/si'
import {DiNodejs} from 'react-icons/di'
import {SiNestjs} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {SiSpringboot} from 'react-icons/si'
import {SiSpringsecurity} from 'react-icons/si'
import {SiHibernate} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiRedis} from 'react-icons/si'
import {SiAmazonaws} from 'react-icons/si'
import {SiDocker} from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='text-light'>My Skills</h5>
      <h2 className="text-light">
        Tech Stack
      </h2>
      <div className="container experience__container">
        <div className="experience__title-ti">
          <h3>Languages</h3>
          <div className="experience__content">
            <article className="experience__details" title='Web Semântica, XML, Web Standards'>
              <div>
                <CgRadioChecked className='experience__details-icon' />
                <h5>HTML5</h5>
              </div>
              <AiOutlineHtml5 size={45} className='tech__icons'/>
            </article>
            <article className="experience__details" title='Bootstrap, Tailwind, SASS, Foundation, Frameworks e Metodologias'>
              <div>
                <CgRadioChecked  className='experience__details-icon' />
                <h5>CSS</h5>
              </div>
             <DiCss3 size={45} className='tech__icons' />
            </article>
            <article className="experience__details" title='DOM, APIs, JSON'>
              <div>
                <CgRadioChecked className='experience__details-icon' />
                <h5 title='Vanilla, ES5, ES6, Jquery'>JavaScript</h5>
              </div>
              <SiJavascript size={45} className='tech__icons' /> 
            </article>
            <article className="experience__details">
              <div>
                <CgRadioChecked className='experience__details-icon' />
                <h5>TypeScript</h5>
              </div>
              <SiTypescript size={45} className='tech__icons' /> 
            </article>
            <article className="experience__details" title='Woocommerce, LMS, Customizações, Elementor, Temas e Plugins'>
              <div>
                <CgRadioChecked className='experience__details-icon' />
                <h5>Java</h5>
              </div>
              <SiJava size={45} className='tech__icons' />  
            </article>
            <article className="experience__details" title='Wordpress, Moodle, Blackboard, Talent LMS, LearnDash'>
              <div>
                <CgRadioChecked className='experience__details-icon' />
                <h5>C#</h5>
              </div>
              <SiCsharp size={45} className='tech__icons' /> 
            </article> 
          </div>
        </div>
        <div className="experience__mkt-edu">
          <h3>FrameWorks</h3>
          <div className="experience__content">
          <article className="experience__details" title=''>
              <div>
                <CgRadioChecked className='experience__details-icon' />
                <h5>Node.js</h5>
              </div>
              <DiNodejs size={50} className='tech__icons' /> 
            </article>
            <article className="experience__details">
              <div>
                <CgRadioChecked className='experience__details-icon' />
                <h5>Nest.js</h5>
              </div>
            <SiNestjs size={45} className='tech__icons'/>
            </article>
            <article className="experience__details">
              <div>
                <CgRadioChecked className='experience__details-icon' />
                <h5 title='Vanilla, ES5, ES6, Jquery'>Express.js</h5>
              </div>
              <SiExpress size={45} className='tech__icons'/>
            </article>
            <article className="experience__details">
              <div>
                <CgRadioChecked className='experience__details-icon' />
                <h5>SpringBoot</h5>
              </div>
              <SiSpringboot size={45} className='tech__icons'/>
            </article>
                        
            <article className="experience__details" title='SEO técnico, local, otimizações'>
              <div>
                <CgRadioChecked className='experience__details-icon' />
                <h5>Spring Security</h5>
              </div>
              <SiSpringsecurity size={45} className='tech__icons'/>
            </article>
            <article className="experience__details">
              <div>
                <CgRadioChecked className='experience__details-icon' />
                <h5>Hibernate</h5>
              </div>
              <SiHibernate size={45} className='tech__icons'/>
            </article>
          </div>
        </div>
        <div className="experience__mkt-edu">
          <h3>Database & Others</h3>
          <div className="experience__content">
          <article className="experience__details" title='Edição e tratamento'>
              <div>
                <CgRadioChecked className='experience__details-icon' />
                <h5>MongoDB</h5>
              </div>
              <SiMongodb size={45} className='tech__icons'/> 
            </article>
            <article className="experience__details">
              <div>
                <CgRadioChecked className='experience__details-icon' />
                <h5>Postgresql</h5>
              </div>
              <SiPostgresql size={45} className='tech__icons'/>
            </article>
            <article className="experience__details">
              <div>
                <CgRadioChecked className='experience__details-icon' />
                <h5>MySql</h5>
              </div>
              <SiMysql size={45} className='tech__icons'/>
            </article>
            
            <article className="experience__details">
              <div>
                <CgRadioChecked className='experience__details-icon' />
                <h5>Redis</h5>
              </div>
              <SiRedis size={45} className='tech__icons'/>
            </article>
            <article className="experience__details">
              <div>
                <CgRadioChecked className='experience__details-icon' />
                <h5>Aws</h5>
              </div>
              <SiAmazonaws size={45} className='tech__icons'/>
            </article>
            <article className="experience__details">
              <div>
                <CgRadioChecked className='experience__details-icon' />
                <h5>Docker</h5>
              </div>
              <SiDocker size={45} className='tech__icons'/>
            </article>
          </div>
        </div>
      </div> 
      </section>
  )
}

export default Experience