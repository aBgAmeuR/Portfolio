import React from "react";
import ProjetComponent from "./Projet";
import data from "../content/projects.json";
import YearProjets from "../components/YearProjets";

const ProjetsList: React.FC = () => {
  const projets = data.filter(item => item.show === true);
  const uniqueYears = Array.from(new Set(projets.map(item => item.year)));

  const getProjectList = () => {
    const elements = uniqueYears.map((year, index) => (
      <React.Fragment key={index}>
        <YearProjets year={year} />
        {projets
          .filter(item => item.year === year)
          .map((item, index) => (
            <ProjetComponent key={index} data={item} />
          ))}
      </React.Fragment>
    ));
    return elements;
  };

  return <div id="Projets">{getProjectList()}</div>;
}

export default ProjetsList;
