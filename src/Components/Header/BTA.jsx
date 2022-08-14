import React from 'react'
import CV from '../../img/cv.pdf'


const BTA = () => {
  return (
    <div className='bta'>
        <a href={CV}download className='btn'>Download CV</a>
        <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default BTA