import React from 'react'
import './experience.css'
import { GiSupersonicBullet } from 'react-icons/gi'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Possess</h5>

      <h2>My Experience</h2>

      <div className="containers experience__containers">

        <div className="frontend__experience">
          <h3>Client Side Service</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GiSupersonicBullet className="experience__details__icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GiSupersonicBullet className="experience__details__icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <GiSupersonicBullet className="experience__details__icons" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GiSupersonicBullet className="experience__details__icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <GiSupersonicBullet className="experience__details__icons" />
              <div>
                <h4>React.Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="backend__experience">
          <h3>Server Side Service</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GiSupersonicBullet className="experience__details__icons" />
              <div>
                <h4>Node.Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GiSupersonicBullet className="experience__details__icons" />
              <div>
                <h4>Express.Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GiSupersonicBullet className="experience__details__icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GiSupersonicBullet className="experience__details__icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

          </div>
        </div>
        <div className="Other_Skills">
          <h3>Tools and Other Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GiSupersonicBullet className="experience__details__icons" />
              <div>
                <h4>Software Testing</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <GiSupersonicBullet className="experience__details__icons" />
              <div>
                <h4>Git and Github</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <GiSupersonicBullet className="experience__details__icons" />
              <div>
                <h4>Linux and Windows OS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GiSupersonicBullet className="experience__details__icons" />
              <div>
                <h4>Google Suit and MS Office</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
          </div>
        </div>

        <div className="Programming__Skills">
          <h3>Programming Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GiSupersonicBullet className="experience__details__icons" />
              <div>
                <h4>C</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GiSupersonicBullet className="experience__details__icons" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GiSupersonicBullet className="experience__details__icons" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>

        </div>
        

      </div>


    </section>
  )
}
export default Experience
