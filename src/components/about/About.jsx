import React from 'react'
import './about.css'
import myImage from '../../assets/photo2.jpeg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>Master of Computer Science<br /><i>University of Illinois-Urbana Champaign</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Publications</h5>
                  <small>3</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Machine Learning Applications</li>
                      <li>Software Engineering</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I'm a <b>Computer Science Graduate</b> from UIUC. 
                    Hello!
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About