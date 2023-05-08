
import React from 'react'
import "./hero.scss"


const Hero = ({hero}) => {
  return (


// //     <div>prueba</div>
// //   )
    <div className="hero">
       <img src={hero.image} alt="" />
      <div className="card">
      <h2>
        {hero.name} {hero.adress}
      </h2>
        <p>🗺️{hero.city} </p>
        <p>🗓️{hero.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + hero.email}>
          raquel.rosales@bootcamp-upgrade.com
          </a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>💾<a href={hero.gitHub}>
            GitHub
          </a></p>
      </div>
    </div>
  );
};
      


export default Hero