import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/action";

export default function Todo() {
  const [todo, setTodo] = useState("");

  const todos = useSelector((store) => store.todo);

  const dispatch = useDispatch();

  const setChange = (e) => {
    setTodo(e.target.value);
  };

  const handleTodo = () => {
    dispatch(addTodo(todo));
  };

  return (
    <div>
      <input type="text" onChange={setChange} />
      <button onClick={handleTodo}>Submit</button>

      <ul>
        {todos.map((todo, i) => {
          return <li key={i}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
