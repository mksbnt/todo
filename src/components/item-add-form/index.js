import React, { Component } from "react";
import { Sbutton } from "./styled";
import { Sinput } from "../search-panel/styled";

export default class ItemAddForm extends Component {
  state = {
    label: ""
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.label !== "") {
      this.props.onItemAdded(this.state.label);
      this.setState({
        label: ""
      });
    } else {
      document.getElementById("input").focus();
    }
  };

  render() {
    return (
      <form className="item-add-form" onSubmit={this.onSubmit}>
        <div className="columns">
          <div className="column is-9">
            <Sinput
              id="input"
              type="text"
              className="input"
              onChange={this.onLabelChange}
              placeholder="what need to be done"
              value={this.state.label}
            />
          </div>
          <div className="column is-3">
            <Sbutton type="submit" className="button">
              add item
            </Sbutton>
          </div>
        </div>
      </form>
    );
  }
}
