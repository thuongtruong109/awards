"use client";

import React from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const ThemeToggle = () => {
  const [isDark, setIsDark] = React.useState<boolean>(false);

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
    <button
      type="button"
      title="Toggle Theme"
      className="relative group rounded-full bg-white border border-gray-200/80 dark:border-transparent p-2 text-sm outline-none dark:bg-gray-700/60 dark:text-gray-400"
    >
      <div
        className="absolute inset-0 z-10 h-full w-full"
        onClick={toggleTheme}
      ></div>
      <div className="z-0" onClick={toggleTheme}>
        {isDark ? (
          <RiMoonFill className="h-[21px] w-[21px] text-purple-500 group-hover:-rotate-90 duration-300" />
        ) : (
          <RiSunFill className="h-[21px] w-[21px] text-yellow-500 group-hover:rotate-180 duration-300" />
        )}
      </div>
    </button>
  );
};
export default React.memo(ThemeToggle);
