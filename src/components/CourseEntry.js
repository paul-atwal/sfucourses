import React from "react";
import "./CourseEntry.css";
import { FaStar, FaSmile, FaMeh, FaFrown } from "react-icons/fa";

const CourseEntry = ({
  id,
  checked = false,
  handleCheck,
  course,
  professor,
  profRating,
  courseDifficulty,
  workload,
}) => {
  const handleClick = () => {
    handleCheck(id);
  };

  const getCourseMean = (courseDifficulty, workload) => {
    const num1 = courseDifficulty !== "" ? parseFloat(courseDifficulty) : null;
    const num2 = workload !== "" ? parseFloat(workload) : null;

    const numbers = [num1, num2].filter((num) => num !== null && !isNaN(num));

    if (numbers.length > 0) {
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      return sum / numbers.length;
    } else {
      return null;
    }
  };

  const getCourseEmoji = (meanRating) => {
    if (meanRating >= 4.0) {
      return <FaFrown style={{ color: "#EA8F95" }} />;
    }
    if (meanRating <= 2.8) {
      return <FaSmile style={{ color: "#43BE83" }} />;
    } else {
      return <FaMeh style={{ color: "#FFD84D" }} />;
    }
  };

  const courseMean = getCourseMean(courseDifficulty, workload);

  const courseEmoji = getCourseEmoji(courseMean);

  const getStarColor = (profRating) => {
    if (profRating >= 4.0) {
      return "#43BE83";
    }
    if (profRating <= 2.8) {
      return "#EA8F95";
    } else {
      return "#FFD84D";
    }
  };

  const starColor = getStarColor(profRating);

  return (
    <div className="course-entry">
      <input
        className="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleClick}
      />
      <span className="course-name">{course}</span>
      <span className="course-difficulty">{courseEmoji}</span>
      <span className="prof-name">{professor}</span>
      <span className="prof-rating">
        <FaStar style={{ color: starColor }} /> {profRating}
      </span>
    </div>
  );
};

export default CourseEntry;
