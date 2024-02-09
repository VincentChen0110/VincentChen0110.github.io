import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.jpeg'
// import IMG2 from '../../assets/img2.png'
// import IMG3 from '../../assets/img3.png'
// import IMG4 from '../../assets/img4.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Hallucination Analysis with Small Language Models </h3>
            <small className='text-light'>Python | PyTorch</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/VincentChen0110" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>MapleJuice Cloud Computing</h3>
            <small className='text-light'>Python</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/VincentChen0110" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Parameter Efficient Fine-Tuning</h3>
            <small className='text-light'>Python | PyTorch</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/VincentChen0110" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Optimization of Convolutional Neural Network with CUDA</h3>
            <small className='text-light'>CUDA | C</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/VincentChen0110" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Hotel Management System</h3>
            <small className='text-light'>HTML | CSS | ReactJS | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/VincentChen0110" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects