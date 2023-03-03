import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

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

  let navigate = useNavigate();
  function handleClick() {
    console.log("click");
    navigate("/projet/" + props.data.route);
  }

  function image() {
    return (
      <div>
        <LazyLoadImage
          alt={`${props.data.title} image`}
          src={`/img/${props.data.image}-min.png`}
          style={{ userSelect: "none" }}
        />
      </div>
    );
  }

  return (
    <div
      className="Projet"
      style={{ background: props.data.color, cursor: "pointer" }}
      onClick={handleClick}
    >
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
      <div className="right">{image()}</div>
    </div>
  );
}

export default ProjetComponent;
