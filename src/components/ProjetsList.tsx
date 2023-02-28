import React, { Component, ReactPropTypes } from "react";
import ProjetComponent from "./ProjetComponent";
import data from "../assets/data.json";
import "./Projets.css";

export default class ProjetsList extends Component {
  render() {
    // console.log(data);

    return (
      <div id="Projets">
        {data.map((data, index) => (
          <ProjetComponent key={index} data={data} />
        ))}
      </div>
    );
  }
}
