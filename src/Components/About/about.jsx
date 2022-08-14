import React from 'react'
import './about.css'
import aboutme from '../../img/me-about.jpg'
import {VscFolderLibrary} from 'react-icons/vsc'
import {MdOutlineDeveloperMode} from 'react-icons/md'
import {MdSettingsSystemDaydream} from 'react-icons/md'


const about = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about_container">
    <div className="about_me">
      <div className="about_me-image">
        <img src={aboutme} alt="About Image" />

      </div>


    </div>

    <div className="about_content">
      <div className="about_cards">

      <article className="about_card">
       <VscFolderLibrary className='about_icon'/>
       <h5>Projects</h5>
       <small>4+ Completed</small>
      </article>

      <article className="about_card">
       <MdOutlineDeveloperMode className='about_icon'/>
       <h5>Development Tools</h5>
       <small>Vs-Code</small>
      </article>

      <article className="about_card">
       <MdSettingsSystemDaydream className='about_icon'/>
       <h5>Operating System</h5>
       <small>Windows-10</small>
      </article>

      </div>

      <p>To pursue a challenging career in web Development and be a part of progressive organization that gives a scope to enhance my knowledge and utilizing my skills towards the growth of the organization.
        </p>

        <a href="#Contact" className='btn btn-primary'>Let's Talk</a>

    </div>

    </div>


    </section>
  )
}

export default about