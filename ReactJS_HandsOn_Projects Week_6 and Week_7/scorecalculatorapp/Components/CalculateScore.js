import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
  const student = {
    name: "Sangeeth",
    school: "PSG Polytechnic",
    total: 480,
    goal: 500
  };
  const avg = student.total / 5;
  return (
    <div className="score-box">
      <h2>Student Score Details</h2>
      <p>Name: {student.name}</p>
      <p>School: {student.school}</p>
      <p>Total: {student.total}</p>
      <p>Goal: {student.goal}</p>
      <p>Average: {avg}</p>
    </div>
  );
}
export default CalculateScore;
