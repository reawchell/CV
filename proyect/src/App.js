import React from 'react'
import { useState } from 'react';
import './App.css';
import Hero from './componentes/Hero';
import Education from './componentes/Education';
import About from './componentes/About';
import Experience from './componentes/Experience';
// import Languages from './componentes/Language';
import { CV } from './CV/Cv';

const {hero, education, experience} = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);


  return (
    <div className="App">
    <Hero hero={hero} />
  
    <About hero={hero.aboutMe} />
    
    {/* <Languages language={language}/> */}

    <button
        className="botones"
        onClick={() => setShowEducation(true)}
      >
        Education
      </button>
      <button
        className="botones"
        onClick={() => setShowEducation(false)}
      >
        Experience
      </button>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
    </div>
  );
}




// const App = () => {
//   return (
//     <div>Y NOS DIERON LAS 2 Y LAS 3...</div>
//   )
// }

export default App
