const TableRows = (props) => {
  const handleCheck = () => {
    props.onCheckChange(props.id);
  };

  return (
    <tr>
      <td>
        <input type="checkbox" checked={props.checked} onChange={handleCheck} />
      </td>
      <td>{props.course_number}</td>
      <td>{props.instructor_name}</td>
      <td>{props.instructor_rating}</td>
      <td>{props.instructor_difficulty}</td>
      <td>{props.course_difficulty}</td>
      <td>{props.workload}</td>
    </tr>
  );
};

export default TableRows;
