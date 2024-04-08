import React from 'react';
import './App.css';
import Headers from "./components/Headers";
import Aboutme from "./components/Aboutme";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
// import Loadingstate from './components/Loadingstate';
import { useEffect, useState } from 'react';




function App () {
    
  // const [loading, setloading] = useState(true);

  // const handleLoading = () => {
  //   setTimeout (() => {
  //   setloading(false)
  //    }, 3000);
  // }

  useEffect (() => {
      window.addEventListener("load", handleLoading);
      return () => window.removeEventListener("load", handleLoading);
  }, [])
  return  (
    < >
    <div>

    <Headers/>
    <hr></hr>
    <Aboutme />
    <hr></hr>
    <Skill />
    <hr></hr>
    <Project />
    <hr></hr>
    <Footer />
    </div>

    </>
  // ) :(<Loadingstate />)
  )
}

export default App;
