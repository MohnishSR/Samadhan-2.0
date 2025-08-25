// Example array of marks
let marks = [45, 67, 89, 32, 76, 99, 54];


// Using loop
let highest = marks[0];
for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
        highest = marks[i];
    }
}
console.log("Highest Marks :", highest);