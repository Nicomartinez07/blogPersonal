import React from "react";

const Header = ({ isDarkMode }) => {
  return (
    <header className={isDarkMode ? "dark-header" : "light-header"}>
      ¡¡¡Blogs de Anecdotas sobre el campamento de 5to!!!
    </header>
  );
};

export default Header;
