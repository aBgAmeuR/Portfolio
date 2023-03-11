import React, { Component, ReactPropTypes } from "react";
import ProjetComponent from "./Projet";
import data from "../assets/data.json";

export default class ProjetsList extends Component {
  render() {
    return (
      <div id="Projets">
        {data.map((data, index) => (
          <ProjetComponent key={index} data={data} />
        ))}
      </div>
    );
  }
}
