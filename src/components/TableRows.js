const TableRows = (props) => {
  const handleCheck = () => {
    props.onCheckChange(props.id);
  };

  const profDifficulty = parseFloat(props.instructor_difficulty);
  const courseDifficulty = parseFloat(props.course_difficulty);
  const courseWorkload = parseFloat(props.workload);

  const ratings = [profDifficulty, courseDifficulty, courseWorkload];

  const getAggregateRating = (ratings) => {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < ratings.length; i++) {
      const value = ratings[i];
      if (!isNaN(value)) {
        sum += value;
        count++;
      }
    }
    return sum / count;
  };

  const getBackgroundColour = (aggregateRating) => {
    if (aggregateRating >= 4.0) {
      return "#E76F51";
    } else if (aggregateRating >= 3.0) {
      return "#E9C46A";
    } else {
      return "#36BA98";
    }
  };

  const getBackgroundColourProf = (rating) => {
    if (rating >= 4.0) {
      return "#36BA98";
    } else if (rating >= 3.0) {
      return "#E9C46A";
    } else {
      return "#E76F51";
    }
  };

  const aggregateRating = getAggregateRating(ratings);

  return (
    <tr>
      <td>
        <input type="checkbox" checked={props.checked} onChange={handleCheck} />
      </td>
      <td style={{ backgroundColor: getBackgroundColour(aggregateRating) }}>
        {props.course_number}
      </td>
      <td
        style={{
          backgroundColor: getBackgroundColourProf(props.instructor_rating),
        }}
      >
        {props.instructor_name}
      </td>
      {/* <td>{props.instructor_rating}</td>
      <td>{props.instructor_difficulty}</td>
      <td>{props.course_difficulty}</td>
      <td>{props.workload}</td> */}
    </tr>
  );
};

export default TableRows;
