import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">Accueil</Link>
      <Link to="/add_cover">Ajouter pochette</Link>
    </div>
  );
};

export default Header;
