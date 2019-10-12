import React, { Component } from "react";
import { Sinput } from "./styled-component";

export default class SearchPanel extends Component {
  state = {
    term: ""
  };

  onSearchChange = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <div className="field">
        <div className="control">
          <Sinput
            className="input"
            type="text"
            placeholder="search"
            value={this.state.term}
            onChange={this.onSearchChange}
          />
        </div>
      </div>
    );
  }
}
