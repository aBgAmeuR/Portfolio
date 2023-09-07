// import { useRouter } from "next/router";
import icons from "../assets/icons.json";
import Image from "next/image";

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
  // const router = useRouter()

  // const handleClick = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault()
  //   router.push("/projet/" + props.data.route)
  // }

  function image() {
    return (
      <div>
        <Image
          alt={`${props.data.title} image`}
          src={`/img/${props.data.image}-min.webp`}
          style={{ userSelect: "none" }}
          width={500}
          height={500}
        />
      </div>
    );
  }

  function getIconCode(iconName: string) {
    const icon = icons.find((icon) => icon.name === iconName);

    return icon ? icon.code : "";
  }

  return (
    <a
      className="Projet"
      style={{ background: props.data.color, cursor: "pointer" }}
      href={`/projet/${props.data.route}`}
    >
      <div className="left-top">
        <h4>{props.data.type}</h4>
        <h2>{props.data.title}</h2>
      </div>
      <div className="left-buttom">
        <h4>Technologies</h4>
        <ul>
          {props.data.technologies.map((tech, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: getIconCode(tech) }}
            />
          ))}
        </ul>
      </div>
      <div className="right">{image()}</div>
    </a>
  );
}

export default ProjetComponent;
