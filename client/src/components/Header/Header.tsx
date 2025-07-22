import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header-container">
      <Link to="/">Home</Link>
      <Link to="/add-cover">Add cover</Link>
    </nav>
  );
};

export default Header;
