import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/download.png'
import IMG2 from '../../assests/BSI.jpg'
import IMG3 from '../../assests/images.png'
import IMG4 from '../../assests/WAI.jpg'

const data=[
  {
    id:1,
    image:IMG1,
    title:'PARCOOD EXPRESS',
    Github:'https://github.com/rahulkumar-1499/PARCOOD-EXPRESS',
  },
  {
    id:2,
    image:IMG2,
    title:'Banking System',
    Github:'https://github.com/rahulkumar-1499/Bank-project',
  },
  {
    id:3,
    image:IMG3,
    title:'NewsBox',
    Github:'https://github.com/rahulkumar-1499/NewsBox',
  },
  {
    id:4,
    image:IMG4,
    title:'WeatherApp',
    Github:'https://github.com/rahulkumar-1499/WeatherForecastWebsite',
  }
]
const Portfolio = () => {
  return (
  <section id='portfolio'>
    <h5>My Recent Works</h5>
    <h2>Projects</h2>

    <div className="containers portfolio__containers">
      {
        data.map(({id,image,title,Github})=>{
          return(
            <article key={id} className="portfolio__item">
        <div className="portfolio__item-img">
          <img src={image} alt="food" />
          <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={Github} className='btn' target="_blank" rel="noreferrer" >Github</a>
            </div>
        
        </div>
      </article>
      
          )
        })
      }
    </div>
  </section>
    )
}

export default Portfolio
