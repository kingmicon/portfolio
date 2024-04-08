import React, { useEffect, useState } from 'react'
import useSound from "use-sound"
import {AiFillPlayCircle, AiFillPauseCircle} from "react-icons/ai"
import Sound from "../images/sb_adriftamonginfinitestars.mp3"
import { IconContext } from 'react-icons/lib'
import File from "../images/Ajiri's Resume (1).pdf"
import Image1 from "../images/avatar.png"
import Typewriter from 'typewriter-effect'
import AnchorLink from "react-anchor-link-smooth-scroll";


const Headers = () => {
  const [isPlaying, SetIsplaying] = useState();
  const [play, {pause}] = useSound(Sound)


  const playingButton = () => {
    if (isPlaying) {
      pause();
      SetIsplaying(false);
    } else{
      play();
      SetIsplaying(true)
    }
  }
  

  useEffect (() => { 
    const askToPlaySong = () => {
      const playSong = window.confirm ("Would like to listen to classic tune why you scroll through");

      if (playSong) {
        SetIsplaying(true);
        play();
      }
      else {
        SetIsplaying(false)

      }
    };
    askToPlaySong();
  },[play]);


  return (
    <header>
      <div className='navbar1'>
        <div className='head'>
          <div className='logo'>
        <h1>Kingmicon</h1>
          </div>
       {! isPlaying ?(
        <button onClick={playingButton} className='playbutton'>
        <IconContext.Provider value={{size:"2em",color: "antiquewhite"}}>
          <AiFillPlayCircle />
        </IconContext.Provider>
        </button>
       ) : (
        <button onClick={playingButton}>
          <IconContext.Provider value={{size:"2em",color: "antiquewhite"}}>
            <AiFillPauseCircle />
          </IconContext.Provider>
        </button>
       )} 
        </div>
        <nav>
          <div className='nav-items'>
            <ul>
              <li><AnchorLink href='#Aboutme'>About</AnchorLink></li>
              <li><AnchorLink href= "#Skills">Skills</AnchorLink></li>
              <li><AnchorLink href='#Projects'>Projects</AnchorLink></li>
              <li><button><a href ={File} target='_blank' rel='noreferrer'>Resume</a></button></li>
            </ul>
          </div>
        </nav>
      </div>
      <hr></hr>
      <div className='textarea'>
        <article className='article1'>
          <h1>
            Hi, i am
          </h1>
          
          <h2>
          <Typewriter
  options={{
    strings: ['AJIRI.'],
    autoStart: true,
    loop: true,
  }}
/>
          </h2>
          <h3>
            A frontend developer
          </h3>
          <p>An enthusiasts that is growth driven.</p>
          <button onClick={() => window.location="mailto:uajirimicon@gmail.com"}>Contact me</button>
        </article>
        <div className='article2'>
          <img src={Image1} alt='web'/>
        </div>
      </div>
      
    </header>
  )
}

export default Headers;