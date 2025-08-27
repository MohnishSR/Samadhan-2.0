const student = {
  name: "Priya",
  marks: {
    math: 85,
    science: 92,
    english: 78,
    history: 88
  }
};

// Convert object values to array
const marksArray = Object.values(student.marks);

// Calculate total
const total = marksArray.reduce((sum, mark) => sum + mark, 0);

// Calculate average
const average = total / marksArray.length;

console.log(`Student: ${student.name}`);
console.log(`Marks:`, student.marks);
console.log(`Total Marks: ${total}`);
console.log(`Average Marks: ${average.toFixed(2)}`);
