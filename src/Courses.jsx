import { useState, useEffect } from "react";
import "./App.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/courses")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch courses");
        return res.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="courses">
      <h2>Online Course Registration Portal</h2>
      {loading && <p className="message">Loading courses...</p>}
      {error && <p className="error">Error: {error}</p>}
      <div className="cards">
        {courses.map((course) => (
          <div className="card" key={course.id}>
            <h3>{course.name}</h3>
            <p>ID: {course.id}</p>
            <p>Duration: {course.duration}</p>
            <p>Fee: ₹{course.fee}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
