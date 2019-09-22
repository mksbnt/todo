import React from "react";
import ReactDOM from "react-dom";

let el = (
  <div>
    <h1>todo list</h1>
    <input placeholder="search" />
    <ul>
      <li>learn react</li>
      <li>create app</li>
    </ul>
  </div>
);

ReactDOM.render(el, document.getElementById("root"));
