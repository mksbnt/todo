import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../item-add-form";
import "./index.scss";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem("drink coffee"),
      this.createTodoItem("make awesome app"),
      this.createTodoItem("have a lunch")
    ],
    term: "",
    filter: "all"
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArr
      };
    });
  };

  addItem = text => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      };
    });
  };

  toogleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToogleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toogleProperty(todoData, id, "important")
      };
    });
  };

  onToogleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toogleProperty(todoData, id, "done")
      };
    });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(item => !item.done);
      case "done":
        return items.filter(item => item.done);
      default:
        return items;
    }
  }

  onSearchChange = term => {
    this.setState({ term });
  };

  onFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="section">
        <div className="container">
          <div className="box">
            <div className="content">
              <AppHeader toDo={todoCount} done={doneCount} />
              <div className="columns">
                <div className="column is-9">
                  <SearchPanel onSearchChange={this.onSearchChange} />
                </div>
                <div className="column is-3">
                  <ItemStatusFilter
                    filter={filter}
                    onFilterChange={this.onFilterChange}
                  />
                </div>
              </div>
              <TodoList
                todos={visibleItems}
                onDeleted={this.deleteItem}
                onToogleImportant={this.onToogleImportant}
                onToogleDone={this.onToogleDone}
              />
              <AddItem onItemAdded={this.addItem} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
