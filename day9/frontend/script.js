// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get references to DOM elements
  const studentList = document.getElementById('student-list');
  const loadingElement = document.getElementById('loading');
  const errorElement = document.getElementById('error');

  // Function to fetch students from the API
  async function fetchStudents() {
    try {
      // Show loading state
      loadingElement.style.display = 'block';
      errorElement.style.display = 'none';
      
      // Fetch data from our backend API
      const response = await fetch('http://localhost:5000/api/students');
      
      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // Parse the JSON response
      const students = await response.json();
      
      // Display the students
      displayStudents(students);
    } catch (err) {
      // Show error message
      errorElement.textContent = 'Failed to fetch students: ' + err.message;
      errorElement.style.display = 'block';
      console.error('Error fetching students:', err);
    } finally {
      // Hide loading state
      loadingElement.style.display = 'none';
    }
  }

  // Function to display students in the DOM
  function displayStudents(students) {
    // Clear any existing content
    studentList.innerHTML = '';
    
    // Create and append student elements
    students.forEach(student => {
      const listItem = document.createElement('li');
      listItem.className = 'student-card';
      
      listItem.innerHTML = `
        <div class="student-info">
          <h3>${student.name}</h3>
          <div class="student-details">
            <p>Age: ${student.age} | Major: ${student.major}</p>
          </div>
        </div>
        <span class="grade">${student.grade}</span>
      `;
      
      studentList.appendChild(listItem);
    });
  }

  // Fetch students when the page loads
  fetchStudents();
});