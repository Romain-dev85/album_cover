import "./Footer.css";

const Footer = () => {
  return (
    <nav className="footer-container">
      <a href="https://github.com/Romain-dev85" target="blank">
        <img src="images/icone-github-grise.png" alt="logo github" />
      </a>
      <a href="http://linkedin.com/in/romain-auvinet-103793328" target="blank">
        <img src="images/icone-linkedin-ronde-grise.png" alt="logo linkedin" />
      </a>
      <p>
        <a href="https://www.senscritique.com/" target="blank">
          Photos: senscritique.com
        </a>
      </p>
    </nav>
  );
};

export default Footer;
