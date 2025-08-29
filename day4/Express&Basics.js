const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Sample student data
let students = [
  { id: 1, name: "Mohnish", age: 21 },
  { id: 2, name: "Rishabh", age: 21 },
  { id: 3, name: "Vaibhav", age: 21 }
];

// GET all students
app.get("/students", (req, res) => {
  res.json(students);
});

// POST new student
app.post("/students", (req, res) => {
  const newStudent = { id: students.length + 1, ...req.body };
  students.push(newStudent);
  res.json(newStudent);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
