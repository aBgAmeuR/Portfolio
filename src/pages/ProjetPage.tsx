import { LazyLoadImage } from "react-lazy-load-image-component";
import GithubBtn from "../components/GithubBtn";
import icons from "../assets/icons.json";

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

const ProjetPage = (props: Props) => {
  function image() {
    return (
      <div>
        <LazyLoadImage
          alt={`${props.data.title} image`}
          src={`/img/${props.data.image}.webp`}
          style={{ minHeight: "100%", width: "100%" }}
        />
      </div>
    );
  }

  function getIconCode(iconName: string) {
    const icon = icons.find((icon) => icon.name === iconName);

    return icon ? icon.code : "";
  }


  return (
    <div className="ProjetPage">
      <div className="imageProjetDiv">{image()}</div>
      <main>
        <h1 style={{ marginTop: "20px", color: "white" }}>
          {props.data.title}
        </h1>
        <p style={{ marginBottom: "8px" }}>{props.data.desc}</p>
        <div className="contentProjet">
          <div style={{ gridArea: "objectif", paddingRight: "20px" }}>
            <h3 style={{ margin: "8px 0", color: "white" }}>
              <strong>Objectif</strong>
            </h3>
            <p>{props.data.objectif}</p>
          </div>
          <div style={{ gridArea: "deroulement" }}>
            <h3 style={{ margin: "8px 0", color: "white" }}>
              <strong>Déroulement</strong>
            </h3>
            <p>{props.data.deroulement}</p>
          </div>
          <div
            style={{
              gridArea: "github",
              width: "200px",
              height: "55px",
              margin: "16px 0",
            }}
          >
            <GithubBtn link={props.data.github} text="Code source" />
          </div>
          <div style={{ gridArea: "technologies" }}>
            <h3 style={{ marginBottom: "2px", color: "white" }}>
              <strong>Technologies</strong>
            </h3>
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "4px",
                listStyle: "none",
              }}
            >
              {props.data.technologies.map((tech, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: getIconCode(tech) }}
            />
          ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjetPage;
