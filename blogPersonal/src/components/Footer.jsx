import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={isDarkMode ? "dark-footer" : "light-footer"}>
      <p>&copy; 2023 Mi Sitio Web. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
