
import React from 'react';
import './dashboard.css'; 

export default function Dashboard() {
  const courses = [
    { courseName: 'Critical Thinking And Practical Reasoning', courseCode: 'UGRC 150', grade: 'A', creditHours: 3 },
    { courseName: 'Statistics And Probability I', courseCode: 'STAT 111', grade: 'A', creditHours: 3 },
    { courseName: 'Algebra And Trigonometry', courseCode: 'MATH 121', grade: 'A', creditHours: 3 },
    { courseName: 'Vectors And Geometry', courseCode: 'MATH 123', grade: 'A', creditHours: 3 },
    { courseName: 'Introduction To Computer Science', courseCode: 'DCIT 101', grade: 'A', creditHours: 3 },
    { courseName: 'Office And Productivity Tools', courseCode: 'DCIT 103', grade: 'A', creditHours: 3 },
    
  ];

  const calculateGPA = (grade) => {
    let gradePoint = 0;
    switch (grade) {
      case 'A':
        gradePoint = 4.0;
        break;
      case 'A-':
        gradePoint = 3.7;
        break;
      case 'B+':
        gradePoint = 3.3;
        break;
      // Add cases for other grades
      default:
        gradePoint = 0.0;
    }
    return gradePoint;
  };

  const calculateCourseGPA = (course) => {
    const gradePoint = calculateGPA(course.grade);
    return (gradePoint * course.creditHours).toFixed(2);
  };

  const calculateCGPA = (courses) => {
    let totalGradePoints = 0;
    let totalCreditHours = 0;

    courses.forEach((course) => {
      const gradePoint = calculateGPA(course.grade);
      totalGradePoints += gradePoint * course.creditHours;
      totalCreditHours += course.creditHours;
    });

    return (totalGradePoints / totalCreditHours).toFixed(2);
  };

  const generateCourseRows = () => {
    return courses.map((course, index) => (
      <tr key={index}>
        <td>{course.courseName}</td>
        <td>{course.courseCode}</td>
        <td>{course.grade}</td>
        <td>{course.creditHours}</td>
        <td>{calculateCourseGPA(course)}</td>
      </tr>
    ));
  };

  return (
    <div className="board">
      <div className="appear" style={{ backgroundColor: '#FFC300' }}>
        <h1>Hello, Mr. JohnOwusu!</h1>
        <p style={{ fontSize: '20px' }}>Welcome To MGRS</p>
      </div>

      <div className="appear" style={{ backgroundColor: '#3498DB' }}>
        <h2>Check Your Current Semester Grades Here!</h2>
        <p>It is displayed below</p>
      </div>

      <div className="appear" style={{ backgroundColor: '#2ECC71' }}>
        <h2>To View Your Overall Grades</h2>
        <p>
          <a href="/form">Go to Missing Grade Form</a>
        </p>
      </div>

      <div className="appear" style={{ backgroundColor: '#9B59B6' }}>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>Grade</th>
              <th>Credit Hours</th>
              <th>Course GPA</th>
            </tr>
          </thead>
          <tbody>
            {generateCourseRows()}
          </tbody>
        </table>
        <p>CGPA: {calculateCGPA(courses)}</p>
      </div>

      <button className="gpa-button">
        <a href="/form">Check Your Overall GPA</a>
      </button>
    </div>

    
  )
}

    