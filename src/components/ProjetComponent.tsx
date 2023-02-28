import React from "react";

type Props = {
  data: {
    title: string;
    route: string;
    type: string;
    year: number;
    image: string;
    color: string;
    technologies: string[];
    desc: string;
    github: string;
    objectif: string;
    deroulement: string;
  };
};

function ProjetComponent(props: Props) {
  return (
    <div className="Projet" style={{ background: props.data.color }}>
      <div className="left-top">
        <h4>{props.data.type}</h4>
        <h2>{props.data.title}</h2>
      </div>
      <div className="left-buttom">
        <h4>Technologies</h4>
        <ul>
          {props.data.technologies.map((tech, index) => (
            <li key={index}>
              <img src={`./src/assets/svg/${tech}.svg`} alt={tech} />
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        <img
          src={`./src/assets/img/${props.data.image}-min.png`}
          alt={`${props.data.title} image`}
        />
      </div>
    </div>
  );
}

export default ProjetComponent;
