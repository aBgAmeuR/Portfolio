import React, { Component, ReactPropTypes } from "react";
import ProjetComponent from "./ProjetComponent";
import data from "../assets/data.json";

type Props = {
  projets: Array<ProjetComponent>
};

export default class ProjetsList extends Component {
  render() {
    // console.log(data);
    
    return (
      <div>
        <ProjetComponent data={data[0]} />
        <ProjetComponent />
      </div>
    );
  }
}
