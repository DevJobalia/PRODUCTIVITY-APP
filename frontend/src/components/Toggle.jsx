import React, { useState, useEffect } from "react";

function Toggle() {
  // TO GET USERS DEFAULT THEME
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const handleThemeSwitch = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode class to the HTML element when the mode changes
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      if (isDarkMode) {
        htmlElement.setAttribute("data-theme", "dark");
      } else {
        htmlElement.setAttribute("data-theme", "light");
      }
    }
  }, [isDarkMode]);

  return (
    <div>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="  bg-indigo-500 text-lg p-1 rounded-md"
      >
        {isDarkMode ? "🌕" : "☀️"}
      </button>
    </div>
  );
}

export default Toggle;
