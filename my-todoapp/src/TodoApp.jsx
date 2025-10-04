import React, { useState, useEffect, useRef } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, input.trim()]);
    setInput('');
    inputRef.current.focus();
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto',backgroundColor:'#f0f0f0',borderRadius:'8px' }}>
      <h2>📝 To-Do List</h2>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task..."
        style={{ width: '100%', padding: '8px', backgroundColor:'#fff',borderRadius:'4px',border:'1px solid #ccc' }}
      />
      <button onClick={addTask} style={{ marginTop: '10px' }}>Add</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginTop: '10px' }}>
            {task}
            <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;