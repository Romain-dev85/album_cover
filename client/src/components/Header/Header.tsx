import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Link to="/">Accueil</Link>
      <Link to="/add_cover">Ajouter pochette</Link>
    </>
  );
};

export default Header;
