import React, { Component } from "react";
import "./index.scss";

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: "all", label: "all" },
    { name: "active", label: "active" },
    { name: "done", label: "done" }
  ];
  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? "is-info is-selected" : "";
      return (
        <span
          type="button"
          className={`button ${clazz}`}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </span>
      );
    });
    return <div className="buttons has-addons">{buttons}</div>;
  }
}
