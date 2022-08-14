import React from 'react'
import './portfolio.css'
import pr1 from '../../img/Project1.png'
import pr2 from '../../img/Project2.png'
import pr3 from '../../img/Project3.png'
import pr4 from '../../img/Project4.png'


const data =[

  {
    id: 1,
    image: pr1,
    title: 'Personal-Portfolio',
    github:'https://github.com/Shubham-8-6/Personal-portfolio.git',
    seeLive: 'https://Personal-portfolio-shubham.netlify.app'
  },


{
  id: 2,
  image: pr2,
  title: 'NewsSource',
  github:'https://github.com/Shubham-8-6/NewsSource.git',
  seeLive: 'https://github.com/Shubham-8-6/NewsSource.git'
},



{
  id: 3,
  image: pr3,
  title: 'ConversionApp',
  github:'https://github.com/Shubham-8-6/ConversionApp.git',
  seeLive: 'https://conversion-app-shubham.netlify.app'
},

{
  id: 4,
  image: pr4,
  title: 'MusicApp',
  github:'https://github.com/Shubham-8-6/MusicApp.git',
  seeLive: 'https://github.com/Shubham-8-6/MusicApp.git'
},

]



const portfolio = () => {
  return (
    <section id='portfolio'>
    
    <h5>My Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio_container">
     {
      data.map(({id, image, title, github, seeLive}) =>{

        return ( 

      <article key={id} className='portfolio_item-pr'>

      <div className="portfolio_item-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>

      <div className="portfolio_li">
      <a href={github} className='btn' target="_blank" rel="noreferrer"> Github</a>
      <a href={seeLive} className='btn btn-primary' target='_blank' rel="noreferrer"> see Live</a>

      </div>
     </article>

        )

      })
     }
    
    </div>


    </section>
  )
}

export default portfolio









