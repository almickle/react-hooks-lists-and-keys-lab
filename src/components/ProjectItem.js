import React from "react";

function ProjectItem({ name, about, technologies }) {
  
  const spansArray = technologies.map((item, index) => {
    
    return <span key={item + name}>{item}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {spansArray}
      </div>
    </div>
  );
}

export default ProjectItem;
