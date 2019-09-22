import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

const AppHeader = () => {
  return <h1>todo list</h1>;
};

const SearchPanel = () => {
  return <input placeholder="search" />;
};

const TodoList = () => {
  return (
    <ul>
      <li>learn react</li>
      <li>create app</li>
    </ul>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
