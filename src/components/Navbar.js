import Form from "react-bootstrap/Form";

const Navbar = ({ onChange }) => {
  return (
    <div className="navbar">
      <h1>Course Picker</h1>
      <form>
        <Form.Control
          className="search-input"
          type="search"
          placeholder="Search"
          onChange={onChange}
        />
      </form>
      <span>Feedback</span>
    </div>
  );
};

export default Navbar;

// the search term state will be handled in App.js and will be passed into this as a prop
