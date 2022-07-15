import React from 'react'
// import './socialicons.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const SocialIcons = (props) => {
    return (
        <div className={props.position}>
            <a href="https://www.linkedin.com/in/joshua-adeniji/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
            </a>
            <a href="https://github.com/ade-ife" target="_blank" rel="noopener noreferrer">
                <BsGithub />
            </a>
            <a href="https://twitter.com/_adeife_" target="_blank" rel="noopener noreferrer">
                <BsTwitter />
            </a>
            <a href="https://medium.com/@NijiTheOG" target="_blank" rel="noopener noreferrer">
                <BsMedium />
            </a>
          
        </div>
  )
}

export default SocialIcons
