import React from "react";
import TodoListItem from "../todo-list-item";

const TodoList = ({ todos, onDeleted, onToogleImportant, onToogleDone }) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;
    return (
      <div className="list-item" key={id}>
        <TodoListItem
          onDeleted={() => onDeleted(id)}
          onToogleImportant={() => onToogleImportant(id)}
          onToogleDone={() => onToogleDone(id)}
          {...itemProps}
        />
      </div>
    );
  });
  return <div className="list">{elements}</div>;
};

export default TodoList;
