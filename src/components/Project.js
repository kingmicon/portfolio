import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Project = () => {
  return (
    <div id='Projects'>
      <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut">
      <div className='project-title'>
        <h1>Projects</h1>
        <h2>My Personal project</h2>
      </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut">
      <div className='project-works'>
        <div className='projects-text'>
          <h1>Doctor DashBoard</h1>
          <p>This is a web app that showcase the dashboard of a doctor which gives him details of patients. This sites has only desktop view and was done with ReactJs, chatjs and plain CSS</p>
          <button><a href= "https://coalationdashboard.netlify.app" target="_blank" rel="noopener noreferrer">view Demo</a></button>
          <button><a href="https://github.com/kingmicon/drDashboard.git" target="_blank" rel="noopener noreferrer">Source Code</a></button>
        </div>
      </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut">
      <div className='project-works'>
        <div className='projects-text'>
          <h1>Customer DashBoard</h1>
          <p>This is a web app that displays the the profile of a customer with history of his transactions and also details of his money spent. This sites was done with plain CSS, ReactJs and chatJs</p>
          <button><a href= "https://662e6ebf5231bc000833903b--onfleekqdashboard.netlify.app/" target="_blank" rel="noopener noreferrer">view Demo</a></button>
          <button><a href="https://github.com/kingmicon/onfleekq-app.git" target="_blank" rel="noopener noreferrer">Source Code</a></button>
        </div>
      </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut">
      <div className='project-works'>
        <div className='projects-text'>
          <h1>Solar Web</h1>
          <p>This is a web sites that showcases the different solar bodies. This sites was done with Tailwind CSS and ReactJs</p>
          <button><a href= "https://admirable-dusk-36e2db.netlify.app/" target="_blank" rel="noopener noreferrer">view Demo</a></button>
          <button><a href="https://github.com/kingmicon/solar-app.git" target="_blank" rel="noopener noreferrer">Source Code</a></button>
        </div>
      </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut">
      <div className='project-works'>
        <div className='projects-text'>
          <h1>Simple Form</h1>
          <p>This is a simple wizard form. This website was created with Reactjs, Css, React-hook-form and chakra-ui.</p>
          <button><a href= "https://exquisite-pithivier-4622c3.netlify.app/" target="_blank" rel="noopener noreferrer">view Demo</a></button>
          <button><a href= "https://github.com/kingmicon/wizard-form.git" target="_blank" rel="noopener noreferrer">Source Code</a></button>
        </div>
      </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut">
      <div className='project-works'>
        <div className='projects-text'>
          <h1>Landing Page</h1>
          <p>This is a landing page for a website. This website was created with ReactJs and CSS.</p>
          <button><a href= "https://eazipayappclone.netlify.app/" target="_blank" rel="noopener noreferrer">view Demo</a></button>
          <button><a href= "https://github.com/kingmicon/eaziappclone.git" target="_blank" rel="noopener noreferrer">Source Code</a></button>
        </div>
      </div>
      </AnimationOnScroll>
    </div>
  )
}

export default Project