import React  from 'react'
import { BsPhone, BsLightbulbFill, BsTvFill } from "react-icons/bs"
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Aboutme = () => {
  return (
    <div className='aboutme'>
      <AnimationOnScroll animateIn="animate__bounceInLeft" animateOut="animate__bounceOutRight">
      <div className='aboutme-text'>        
      <h1>
     What you need to know about me.
      </h1>
      <p>
        I am an enthusiasts that is growth driven, innovative and passionate about solving complex problems. As a software developer, designing computer programs enhances my creative and problem-solving skills.
        </p>
        <p>
        I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, building small and medium web apps, features, animations, and coding interactive layouts.
      </p>
      </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceInLeft" animateOut="animate__bounceOutRight">
      <div className='aboutme-card'>
        <div className='card-text' >
          <h1>Web Development</h1>
          <p>I create awesome websites and also the fix technical aspects, such as its performance and capacity.</p>
          <BsTvFill size={80} />
        </div>
        <div className='card-text'>
          <h1>Problem Solving</h1>
          <p>I find desired solutions to a problem, and applying best practices to achieve the best and befitting result.</p>
          <BsLightbulbFill size={80} />
        </div>
        <div className='card-text'>
          <h1>Responsible Design</h1>
          <p>Using the best technologies and frame works to make the best responsive website that spreads across all device.</p>
          <BsPhone size={80}/>
        </div>
      </div>
      </AnimationOnScroll>
    </div>
  )
}

export default Aboutme