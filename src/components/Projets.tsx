import React from "react";
import ProjetComponent from "./Projet";
import data from "../content/projects.json";
import YearProjets from "../components/YearProjets";

const ProjetsList: React.FC = () => {
  const projets = data.filter(item => item.show === true);
  const uniqueYears = Array.from(new Set(projets.map(item => item.year)));

  return <div id="Projets">
    {uniqueYears.map((year, index) => (
      <React.Fragment key={index}>
        <YearProjets year={year} />
        {projets.filter(item => item.year === year).map((item, index) => (
          <ProjetComponent key={index} data={item} />
        ))}
      </React.Fragment>
    ))}
  </div>;
}

export default ProjetsList;
