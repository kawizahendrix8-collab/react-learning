import React, { useState } from 'react';

function App(){
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (input.trim() === "") return; // prevents adding empty tasks
    setTasks([...tasks, input]);
    setInput("");
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a task"
      />

      <button onClick={addTask}>Add</button>

      {tasks.map((task, i) => (
        <p key={i}>{task}</p>
      ))}
    </div>
  );
}

export default App; // only one closing brace here