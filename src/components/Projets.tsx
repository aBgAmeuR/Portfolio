import React, { Component, ReactHTMLElement, ReactPropTypes, useEffect, useState } from "react";
import ProjetComponent from "./Projet";
import data from "../assets/data.json";
import YearProjets from "../components/YearProjets";

const ProjetsList: React.FC = () => {
  const [projetsElements, setProjetsElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
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
    setProjetsElements(elements);
  }, []);

  return <div id="Projets">{projetsElements}</div>;
}

export default ProjetsList;
