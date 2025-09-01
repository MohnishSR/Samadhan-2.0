import React, { useState, useEffect } from 'react';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This effect will run once when the component mounts
    fetchStudents();
  }, []); // Empty dependency array means this effect runs once on mount

  const fetchStudents = async () => {
    try {
      setLoading(true);
      // Fetch data from our backend API
      const response = await fetch('http://localhost:5000/api/students');
      
      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // Parse the JSON response
      const data = await response.json();
      
      // Update state with the fetched students
      setStudents(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch students: ' + err.message);
      console.error('Error fetching students:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Student Directory</h1>
      
      {/* Show error message if there's an error */}
      {error && <div className="error">{error}</div>}
      
      {/* Show loading message while fetching data */}
      {loading ? (
        <div className="loading">Loading students...</div>
      ) : (
        /* Show student list once data is loaded */
        <ul className="student-list">
          {students.map(student => (
            <li key={student.id} className="student-card">
              <div className="student-info">
                <h3>{student.name}</h3>
                <div className="student-details">
                  <p>Age: {student.age} | Major: {student.major}</p>
                </div>
              </div>
              <span className="grade">{student.grade}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;