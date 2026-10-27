import { useState } from "react";
import Courses from "./Courses";
import Library from "./Library";
import "./App.css";

function App() {
  const [tab, setTab] = useState("courses");

  return (
    <div className="app">
      <h1>Full Stack Web Development Lab</h1>
      <div className="tabs">
        <button
          className={tab === "courses" ? "tab active" : "tab"}
          onClick={() => setTab("courses")}
        >
          Question 2: Courses
        </button>
        <button
          className={tab === "library" ? "tab active" : "tab"}
          onClick={() => setTab("library")}
        >
          Question 6: Digital Library
        </button>
      </div>
      {tab === "courses" ? <Courses /> : <Library />}
    </div>
  );
}

export default App;
