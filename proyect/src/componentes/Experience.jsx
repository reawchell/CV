import React  from "react";
import "./experience.scss";

const Experience = ({ experience }) => {
    return (
      <div>
        <div className="experience_card">
          {experience.map((item)=>{
            return (
              <div key={JSON.stringify(item)}>
                <p className="name">{item.name}</p>
                <p>{item.date}</p>
                <p>{item.where}</p>
                <p>{item.description}</p>
                </div>
            );
          })}
        </div>
        
      </div>
      );
  };

  export default Experience;