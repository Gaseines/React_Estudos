import React, { useReducer, useState } from "react";

const HookUseReducer = () => {
  // 3 - iniciando com o useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // 4 - Avançand com useReducer
  const initialTasks = [
    {
      id: 1,
      text: "fazer uma coisa",
    },
    {
      id: 2,
      text: "fazer outra coisa",
    },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText("");

        return [...state, newTask];
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  };

  const handleDelete = (id) => {
    dispatchTasks({ type: "DELETE", id });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar número</button>
      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
          placeholder="Digite uma nova tarefa"
        />
        <input type="submit" value={"Enviar"} />
      </form>
      {tasks.map((task) => (
        <li
          key={task.id}
          onDoubleClick={() => handleDelete(task.id)}
          style={{ cursor: "pointer" }}
        >
          {task.text}
        </li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;
