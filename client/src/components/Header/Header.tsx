import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header-container">
      <Link to="/">Accueil</Link>
      <Link to="/add-cover">Ajouter pochette</Link>
    </nav>
  );
};

export default Header;
