import React from "react";

const Header = ({ isDarkMode }) => {
  return (
    <header className={isDarkMode ? "dark-header" : "light-header"}>
      Blogs de Anecdotas!!!
    </header>
  );
};

export default Header;
