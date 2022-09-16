import React from 'react'
import './about.css'
import ME from '../../assests/rahul.jpg'
import { IoIosSchool } from 'react-icons/io'
import { AiOutlineFolder } from 'react-icons/ai'
import { FaLaptopMedical } from 'react-icons/fa'
const About = () => {
  return (
    <section id='abouta'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="containers about__containers">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Error" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="mycard">
              <IoIosSchool className='about__icon' />
              <h5>Fresher</h5>
              <small>Currently Pursuing B.Tech</small>
            </article>
            <article className="mycard">
              <AiOutlineFolder className='about__icon' />
              <h5>Projects</h5>
              <small>5+ completed</small>
            </article>
            <article className="mycard">
              <FaLaptopMedical className='about__icon' />
              <h5>Coder</h5>
              <small>100+ Question solved on leetcode</small>
            </article>
          </div>
          <p>
            Hi ! Myself Rahul Kumar currently pursuing B.Tech in Information Technology from Institute Of Technology Guru Ghasidas University. I belongs to Bokaro,Jharkhand . I am a programmer , a developer and writer.
          </p>

          <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
