import React from "react";
import "./index.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header">
      <h1 className="title">todo list</h1>
      <h2 className="title is-6">
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
