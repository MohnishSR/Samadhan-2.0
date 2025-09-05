const express = require('express');
 const cors = require('cors');
 const fs = require('fs');
 const path = require('path');
 
 const app = express();
app.use(cors());
app.use(express.json());

// Simple file-based storage
const DATA_FILE = path.join(__dirname, 'todos.json');

// Load todos from file
function loadTodos() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading todos:', error);
  }
  return [];
}

// Save todos to file
function saveTodos(todos) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2));
  } catch (error) {
    console.error('Error saving todos:', error);
  }
}

let todos = loadTodos();

// Get all todos
app.get('/api/todos', (req, res) => {
  try {
    const sortedTodos = [...todos].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.json(sortedTodos);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching todos' });
  }
});

// Add new todo
app.post('/api/todos', (req, res) => {
  try {
    const newTodo = {
      id: Date.now().toString(),
      text: req.body.text,
      completed: false,
      createdAt: new Date().toISOString()
    };
    todos.push(newTodo);
    saveTodos(todos);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: 'Error creating todo' });
  }
});

// Toggle todo completion
app.patch('/api/todos/:id/toggle', (req, res) => {
  try {
    const todoIndex = todos.findIndex(t => t.id === req.params.id);
    if (todoIndex === -1) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    todos[todoIndex].completed = !todos[todoIndex].completed;
    saveTodos(todos);
    res.json(todos[todoIndex]);
  } catch (error) {
    res.status(500).json({ error: 'Error toggling todo completion' });
  }
});

// Delete todo
app.delete('/api/todos/:id', (req, res) => {
  try {
    const todoIndex = todos.findIndex(t => t.id === req.params.id);
    if (todoIndex === -1) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    todos.splice(todoIndex, 1);
    saveTodos(todos);
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting todo' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});