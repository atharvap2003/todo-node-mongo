import { useEffect, useState } from "react";
import "./App.css";

// components
import ToDo from "./components/ToDo";
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "./utils/HandleApi";
getAllTodo;

function App() {
  const [toDo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            value={text}
            placeholder="Add Todo"
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating?
                () =>
                    updateTodo(toDoId, text, setText, setTodo, setIsUpdating)
                : () => addTodo(text, setText, setTodo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>

        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTodo = {()=> deleteTodo(item._id, setTodo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
