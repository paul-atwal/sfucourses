import Table from "react-bootstrap/Table";
import TableRows from "./TableRows";

const Tables = ({ data, checkedRows, onCheckChange }) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th></th>
          <th>CMPT</th>
          <th>Prof</th>
          <th>Prof Rating</th>
          <th>Prof Difficulty</th>
          <th>Course Difficulty</th>
          <th>Course Workload</th>
        </tr>
      </thead>
      <tbody>
        {data.entries.map((row) => (
          <TableRows
            key={row.id}
            id={row.id}
            course_number={row.course_number}
            instructor_name={row.instructor_name}
            instructor_rating={row.instructor_rating}
            instructor_difficulty={row.instructor_difficulty}
            course_difficulty={row.course_difficulty}
            workload={row.workload}
            checked={checkedRows[row.id]}
            onCheckChange={onCheckChange}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default Tables;
