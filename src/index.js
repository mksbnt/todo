import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list.js";

const App = () => {
  const todoData = [
    { label: "learn react", important: false, id: "1" },
    { label: "create app", important: false, id: "2" },
    { label: ".!.", important: true, id: "3" }
  ];
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
