import React, { useState, useRef } from "react";
import { BsMoon } from "react-icons/bs";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleTheme = () => {
    setDarkMode(!darkMode);
    document.querySelector("body").classList.toggle("dark");
    document.querySelectorAll(".card").forEach((card) => {
      if (!darkMode) {
        card.classList.add("card__dark");
        card.classList.remove("card__light");
      } else {
        card.classList.add("card__light");
        card.classList.remove("card__dark");
      }
    });
  };
  return (
    <nav>
      <h1>Where in the World ?</h1>
      <button className="theme_switch" onClick={handleTheme}>
        <BsMoon />
        Dark Mode
      </button>
    </nav>
  );
};
export default Header;
