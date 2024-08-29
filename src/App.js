import "./App.css";
import Navbar from "./components/Navbar";
import CourseEntry from "./components/CourseEntry";
import data from "./data.js";
import { useState, useMemo } from "react";
import SummaryCard from "./components/SummaryCard.js";
import Feedback from "./components/Feedback";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function App() {
  const [checkedRows, setCheckedRows] = useState({});
  const handleCheckChange = (id) => {
    setCheckedRows((prevRows) => ({
      ...prevRows,
      [id]: !prevRows[id],
    }));
  };

  const selectedData = {
    entries: data.entries.filter((row) => checkedRows[row.id]),
  };

  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = {
    entries: data.entries.filter(
      (row) =>
        row.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.instructor_name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  };

  const calculateMeanRating = (attribute) => {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < data.entries.length; i++) {
      const row = data.entries[i];

      if (checkedRows[row.id]) {
        const value = parseFloat(row[attribute]);

        if (!isNaN(value)) {
          sum += value;
          count++;
        }
      }
    }

    return count > 0 ? (sum / count).toFixed(1) : 0;
  };

  const profRating = calculateMeanRating("instructor_rating");
  const profDifficulty = calculateMeanRating("instructor_difficulty");
  const courseDifficulty = calculateMeanRating("course_difficulty");
  const courseWorkload = calculateMeanRating("workload");

  const location = useLocation();

  return (
    <div className="App">
      <Navbar
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        showSearch={location.pathname !== "/feedback"}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="full-table">
                <div className="table-container">
                  <div className="course-entries">
                    {filteredData.entries.map((row) => (
                      <CourseEntry
                        key={row.id}
                        id={row.id}
                        checked={!!checkedRows[row.id]}
                        handleCheck={handleCheckChange}
                        course={row.course}
                        professor={row.instructor_name}
                        profRating={row.instructor_rating}
                        courseDifficulty={row.course_difficulty}
                        workload={row.workload}
                        status={row.status}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="card-container">
                <SummaryCard
                  rating={profRating}
                  good="high"
                  title="Avg. Prof Rating"
                />
                <SummaryCard
                  rating={profDifficulty}
                  good="low"
                  title="Avg. Prof Difficulty"
                />
                <SummaryCard
                  rating={courseDifficulty}
                  good="low"
                  title="Avg. Course Difficulty"
                />
                <SummaryCard
                  rating={courseWorkload}
                  good="low"
                  title="Avg. Course Workload"
                />
              </div>
              <div className="selected-table">
                <div className="table-container">
                  <div className="course-entries">
                    {selectedData.entries.map((row) => (
                      <CourseEntry
                        key={row.id}
                        id={row.id}
                        checked={!!checkedRows[row.id]}
                        handleCheck={handleCheckChange}
                        course={row.course}
                        professor={row.instructor_name}
                        profRating={row.instructor_rating}
                        courseDifficulty={row.course_difficulty}
                        workload={row.workload}
                        status={row.status}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
