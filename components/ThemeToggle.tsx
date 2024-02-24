"use client";
import { memo, useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  };

  return (
    <button className="relative rounded-lg p-2.5 text-sm outline-none hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
      <div
        className="absolute inset-0 z-10 h-full w-full"
        onClick={toggleTheme}
      ></div>
      <div className="z-0" onClick={toggleTheme}>
        {isDark ? (
          <RiSunFill className="h-5 w-5 text-yellow-500" />
        ) : (
          <RiMoonFill className="h-5 w-5 text-purple-500" />
        )}
      </div>
    </button>
  );
};
export default memo(ThemeToggle);
