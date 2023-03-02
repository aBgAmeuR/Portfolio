import GithubBtn from "./components/GithubBtn";
import "./ProjetPage.css";

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
const imageProjetDiv = {
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};
const imageProjet = {
  minHeight: "300px",
  width: "100%",
};
const mainStyle = {
  maxWidth: "828px",
  width: "100%",
  padding: "0 4rem",
};

const ProjetPage = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      <div style={imageProjetDiv}>
        <img
          src={`/img/${props.data.image}.png`}
          alt={`${props.data.title} image`}
          style={imageProjet}
        />
      </div>
      <main style={mainStyle}>
        <h1>{props.data.title}</h1>
        <p>{props.data.desc}</p>
        <h3>Objectif</h3>
        <p>{props.data.objectif}</p>
        <h3>Déroulement</h3>
        <p>{props.data.deroulement}</p>
        <GithubBtn link={props.data.github} />
        <h3>Technologies</h3>
        <ul>
          {props.data.technologies.map((tech, index) => (
            <li key={index}>
              <img src={`/svg/${tech}.svg`} alt={tech} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ProjetPage;
