import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiNetlify} from 'react-icons/si'
const Hsocials = () => {
  return (
    <div className='h_socials'>
        <a href="https://linkedin.com/in/shubhambisht08" target='_blank'  rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Shubham-8-6" target='_blank'  rel="noreferrer"><BsGithub/></a>
        <a href="https://conversion-app-shubham.netlify.app" target='_blank'  rel="noreferrer"><SiNetlify/></a>
    </div>
  )
}

export default Hsocials