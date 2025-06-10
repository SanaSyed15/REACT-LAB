import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [form, setForm] = useState({ name: "", date: "", desc: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (form.name && form.date) {
      setTasks([...tasks, { ...form, done: false }]);
      setForm({ name: "", date: "", desc: "" });
    }
  };

  const toggleTask = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updated);
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : filter === "done" ? task.done : !task.done
  );

  return (
    <div className="app">
      <form onSubmit={handleAdd}>
        <input name="name" type="text" placeholder="Task Name" value={form.name} onChange={handleChange} />
        <input name="date" type="date" value={form.date} onChange={handleChange} />
        <input name="desc" type="text" placeholder="Description" value={form.desc} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>

      <div className="filters">
        {["all", "done", "notdone"].map((type) => (
          <button key={type} onClick={() => setFilter(type)}>{type}</button>
        ))}
      </div>

      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index} onClick={() => toggleTask(index)} className={task.done ? "done" : ""}>
            <b>{task.name}</b> - {task.date} {task.desc && `| ${task.desc}`}
          </li>
        ))}
      </ul>
    </div>
  );
}




