import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-gray-50 text-gray-600 ring-gray-500/10",
    "bg-red-50 text-red-700 ring-red-600/10",
    "bg-yellow-50 text-yellow-800 ring-yellow-600/20",
    "bg-green-50 text-green-700 ring-green-600/20",
    "bg-blue-50 text-blue-700 ring-blue-700/10",
    "bg-indigo-50 text-indigo-700 ring-indigo-700/10",
    "bg-purple-50 text-purple-700 ring-purple-700/10",
    "bg-pink-50 text-pink-700 ring-pink-700/10",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        highlight: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
      },
      screens: {
        narrow: { raw: "(max-aspect-ratio: 3 / 2)" },
        wide: { raw: "(min-aspect-ratio: 3 / 2)" },
        "taller-than-854": { raw: "(min-height: 854px)" },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
