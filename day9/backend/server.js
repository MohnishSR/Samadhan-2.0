const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample student data
let students = [
  { id: 1, name: 'John Doe', age: 20, grade: 'A', major: 'Computer Science' },
  { id: 2, name: 'Jane Smith', age: 22, grade: 'B+', major: 'Mathematics' },
  { id: 3, name: 'Bob Johnson', age: 21, grade: 'A-', major: 'Physics' },
  { id: 4, name: 'Alice Brown', age: 23, grade: 'B', major: 'Chemistry' },
  { id: 5, name: 'Charlie Wilson', age: 19, grade: 'A+', major: 'Biology' }
];

// Routes

// GET all students
app.get('/api/students', (req, res) => {
  res.json(students);
});

// GET student by ID
app.get('/api/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);
  
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  
  res.json(student);
});

// POST new student
app.post('/api/students', (req, res) => {
  const { name, age, grade, major } = req.body;
  
  if (!name || !age || !grade || !major) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
  
  const newStudent = {
    id: newId,
    name,
    age: parseInt(age),
    grade,
    major
  };
  
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT update student
app.put('/api/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age, grade, major } = req.body;
  
  const studentIndex = students.findIndex(s => s.id === id);
  
  if (studentIndex === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }
  
  const updatedStudent = {
    id,
    name: name || students[studentIndex].name,
    age: age ? parseInt(age) : students[studentIndex].age,
    grade: grade || students[studentIndex].grade,
    major: major || students[studentIndex].major
  };
  
  students[studentIndex] = updatedStudent;
  res.json(updatedStudent);
});

// DELETE student
app.delete('/api/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const studentIndex = students.findIndex(s => s.id === id);
  
  if (studentIndex === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }
  
  const deletedStudent = students[studentIndex];
  students = students.filter(s => s.id !== id);
  
  res.json(deletedStudent);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});