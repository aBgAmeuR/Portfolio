import React from "react";
import ProjetComponent from "./Projet";
import data from "../assets/data.json";
import YearProjets from "../components/YearProjets";

const ProjetsList: React.FC = () => {

  const getProjectList = () => {
    const uniqueYears = Array.from(new Set(data.map(item => item.year)));
    const elements = uniqueYears.map((year, index) => (
      <React.Fragment key={index}>
        <YearProjets year={year} />
        {data
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
