import React from 'react';
import './App.css';
import Headers from "./components/Headers";
import Aboutme from "./components/Aboutme";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Loadingstate from './components/Loadingstate';
import { useEffect, useState } from 'react';

function App () {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup the timer if the component unmounts before the timer completes
    return () => clearTimeout(timer);
  }, []);

  return !loading ? (
    <div>
      <Headers />
      <hr />
      <Aboutme />
      <hr />
      <Skill />
      <hr />
      <Project />
      <hr />
      <Footer />
    </div>
  ) : (
    <Loadingstate />
  );
}

export default App;
