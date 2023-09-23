import React, { useState, useEffect } from "react";

function Toggle() {
  // TO GET USERS DEFAULT THEME
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setIsDarkMode("dark");
    } else {
      setIsDarkMode("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    // setTheme(theme === "dark" ? "light" : "dark");
    setIsDarkMode((prevMode) => !prevMode);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  // // Function to toggle dark/light mode
  // const toggleDarkLightMode = () => {

  // };

  useEffect(() => {
    // Apply dark mode class to the HTML element when the mode changes
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.classList.toggle("dark", isDarkMode);
    }

    // Update CSS variables based on the dark/light mode
    const root = document.documentElement;
    if (root) {
      root.style.setProperty(
        "--color-bkg",
        isDarkMode ? "217deg 32.6% 17.5%" : "210deg 40% 98%"
      );
      root.style.setProperty(
        "--color-secondary",
        isDarkMode ? "210deg 40% 98%" : "217deg 32.6% 17.5%"
      );
      root.style.setProperty(
        "--color-accent1",
        isDarkMode ? "288deg 95.8% 60.6%" : "288deg 95.8% 90.6%"
      );
      root.style.setProperty(
        "--color-accent2",
        isDarkMode ? "168deg 83.8% 48.2%" : "168deg 83.8% 78.2%"
      );
    }
  }, [isDarkMode]);
  return (
    <div>
      <button
        type="button"
        // onClick={handleThemeSwitch}
        onClick={handleThemeSwitch}
        className="fixed z-10 top-2 right-2 bg-indigo-500 text-lg p-1 rounded-md"
      >
        {isDarkMode === "dark" ? "🌕" : "☀️"}
      </button>
    </div>
  );
}

export default Toggle;
