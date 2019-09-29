import React, { Component } from "react";
import { Swrapper, Sbutton } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToogleImportant,
      onToogleDone,
      done,
      important
    } = this.props;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }

    return (
      <Swrapper>
        <span className={classNames}>
          <span className="todo-list-item-label" onClick={onToogleDone}>
            {label}
          </span>
        </span>

        <div className="buttons">
          <Sbutton
            type="button"
            onClick={onToogleImportant}
            className="button is-info is-outlined"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faExclamation} />
            </span>
          </Sbutton>
          <Sbutton
            type="button"
            onClick={onDeleted}
            className="button is-danger is-outlined"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </Sbutton>
        </div>
      </Swrapper>
    );
  }
}
