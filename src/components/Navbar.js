import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Navbar = ({ onChange, showSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="navbar">
      <h1>
        <Link to="/" className="navbar-link">
          Course Picker
        </Link>
      </h1>
      {showSearch && (
        <form>
          <Form.Control
            className="search-input"
            type="search"
            placeholder="Search"
            onChange={onChange}
            onKeyDown={handleKeyPress}
          />
        </form>
      )}
      <span>
        <Link to="/feedback" className="navbar-link">
          Feedback
        </Link>
      </span>
    </div>
  );
};

export default Navbar;

// the search term state will be handled in App.js and will be passed into this as a prop
