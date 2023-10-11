import { Data } from "@/types/data";
import { getData } from "@/utils/getData";
import icons from "@/assets/icons.json";
import GithubBtn from "@/components/GithubBtn";
import LateralBar from "@/components/LateralBar";
import { Key } from "react";
import Link from "next/link";
import ProjectErrorPage from "@/components/ProjectErrorPage";

async function ProjetPage({ params }: { params: { name: string[] } },) {
  const data: Data = await getData(params.name[0]);
  if (!data) return <ProjectErrorPage />

  function image() {
    return (
      <div>
        <img
          alt={`${data.title} image`}
          src={`/img/${data.image}.webp`}
          style={{ minHeight: "100%", width: "100%", height: "auto" }}
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
      <Link href="/" className="back">
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 7.00076C0 7.25667 0.111442 7.50479 0.303672 7.69004L5.88852 13.2649C6.08837 13.4594 6.3104 13.5554 6.5487 13.5554C7.07339 13.5554 7.46157 13.1804 7.46157 12.6701C7.46157 12.4074 7.35491 12.1722 7.18738 12.0132L5.29048 10.0931L2.13518 7.21128L1.83389 7.75276L4.7634 7.92518H15.0658C15.622 7.92518 16 7.54628 16 7.00076C16 6.45523 15.622 6.07637 15.0658 6.07637H4.7634L1.83389 6.24878L2.13518 6.79871L5.29048 3.90847L7.18738 1.98684C7.35491 1.81934 7.46157 1.59256 7.46157 1.32988C7.46157 0.81958 7.07339 0.444607 6.5487 0.444607C6.3104 0.444607 6.08837 0.533692 5.87463 0.748955L0.303672 6.31144C0.111442 6.49673 0 6.74485 0 7.00076Z" fill="white" />
        </svg>
        <span>Retour</span>
      </Link>
      <div className="imageProjetDiv">{image()}</div>
      <main>
        <h1 style={{ marginTop: "20px", color: "white" }}>
          {data.title}
        </h1>
        <p style={{ marginBottom: "8px" }}>{data.desc}</p>
        <div className="contentProjet">
          <div style={{ gridArea: "objectif", paddingRight: "20px" }}>
            <h3 style={{ margin: "8px 0", color: "white" }}>
              <strong>Objectif</strong>
            </h3>
            <p>{data.objectif}</p>
          </div>
          <div style={{ gridArea: "deroulement" }}>
            <h3 style={{ margin: "8px 0", color: "white" }}>
              <strong>Déroulement</strong>
            </h3>
            <p>{data.deroulement}</p>
          </div>
          <div className="btns">
            <GithubBtn link={data.github} text="Code source" />
            {data.testUrl && (
              <Link className="btn-test" href={data.testUrl} target="_blank">
                <p>Tester</p>
              </Link>)}
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
              {data.technologies.map((tech: string, index: Key | null | undefined) => (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{ __html: getIconCode(tech) }}
                />
              ))}
            </ul>
          </div>
        </div>
        <LateralBar text={'Projet'}></LateralBar>
      </main>
    </div>
  );
};

export default ProjetPage;