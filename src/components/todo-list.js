import React from "react";

import TodoListItem from "./todo-list-item";

const TodoList = () => {
  return (
    <ul>
      <li>
        <TodoListItem label="learn react" important />
      </li>
      <li>
        <TodoListItem label="create app" />
      </li>
    </ul>
  );
};

export default TodoList;
