import { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);

  const handleAddTask = () => {
    if (input.trim() === '') return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: input.trim(), completed: false }
    ]);
    setInput('');
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAddTask();
  };

  return (
    <div className="todo-list-container">
      <h2>To-Do List</h2>
      <div className="todo-input-row">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul className="todo-list">
        {tasks.length === 0 && <li className="empty">No tasks yet.</li>}
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span onClick={() => handleToggleTask(task.id)}>{task.text}</span>
            <button className="remove" onClick={() => handleRemoveTask(task.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;