import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Skill = () => {
  return (
    <div id='Skills'>
      <AnimationOnScroll animateIn="animate__fadeInDown" animateOut="animate__fadeOutDown">
      <div className='skill-header'>
        <h1>
          Skills
        </h1>
        <h2>
          Skills i have aquired over time
        </h2>
      </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInDown" animateOut="animate__fadeOutDown">
      <div className='skill-text'>
        <p>
          My coding journey started with the mindset of process improvements and automating manual activies. software development was not my intial career path, but I am glad I discovered it.
        </p>
        <p>Here are the few technologies i have used:</p>
      </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInDown" animateOut="animate__fadeOutDown">
      <div className='skill-list'>
        <div className='skill-list1'>
        <h1>HTML</h1>
        </div>
        <div className='skill-list1'>
        <h1>CSS</h1>
        </div>
        <div className='skill-list1'>
        <h1>JavaScript</h1>
        </div>
        <div className='skill-list1'>
        <h1>React Js</h1>
        </div>
        <div className='skill-list1'>
        <h1>BootStrap</h1>
        </div>
        <div className='skill-list1'>
        <h1>Tailwind</h1>
        </div>
        <div className='skill-list1'>
        <h1>Git Hub</h1>
        </div>
      </div>
      </AnimationOnScroll>
    </div>
  )
}

export default Skill