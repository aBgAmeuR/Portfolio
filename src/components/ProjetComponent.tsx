import React, { useEffect, useRef } from "react";

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
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    // On parcourt tous les refs d'images et on charge l'image SVG correspondante
    imagesRef.current.forEach((imageRef, index) => {
      if (imageRef && props.data.technologies[index]) {
        const img = new Image();
        img.src = `/svg/${props.data.technologies[index]}.svg`;
        console.log(img.src);

        img.onload = () => {
          imageRef.src = img.src;
        };
      }
    });
  }, [props.data.technologies]);

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
              <img ref={(el) => (imagesRef.current[index] = el)} alt={tech} />
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        <img
          src={`/img/${props.data.image}-min.png`}
          alt={`${props.data.title} image`}
        />
      </div>
    </div>
  );
}

export default ProjetComponent;
