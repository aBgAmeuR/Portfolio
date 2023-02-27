import React, { Component, ReactPropTypes} from "react";

type Props = {
  projets: Component
};

export default class ProjetComponent extends Component {

  constructor(props: Props) {
    super(props);
    const data = props.data;
    
  }
  render() {
    return (
      <div className="Projet">
        <h1>Projet</h1>
      </div>
    );
  }
}
