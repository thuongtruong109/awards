"use client";

import React from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };
    
    const [isDark, setIsDark] = React.useState<boolean>(false);

    React.useEffect(() => {
      setIsDark(theme !== "light");
    }, [theme]);

  return (
    <button
      type="button"
      title="Toggle Theme"
      className="relative group rounded-full bg-white border border-slate-100 dark:border-transparent p-2 text-sm outline-none dark:bg-gray-700/60 dark:text-gray-400"
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
