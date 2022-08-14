import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiNetlify} from 'react-icons/si'


const footer = () => {
  return (

  <footer>

    <ul className='permalinks'>

      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#Contact">Contact</a></li>
    </ul>

    <div className="footer_social">
      <a href="https://instagram.com/boykabisht" target='_blank' rel="noreferrer"><BsInstagram/></a>
      <a href="https://github.com/Shubham-8-6" target='_blank' rel="noreferrer"><BsGithub/></a>
      <a href="https://Personal-portfolio-shubham.netlify.app" target='_blank' rel="noreferrer"><SiNetlify/></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; SHUBHAM BISHT. All rights reserved.</small>
    </div>

  </footer>
  )
}

export default footer