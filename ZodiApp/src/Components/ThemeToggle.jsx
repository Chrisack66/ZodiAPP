import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext"; 

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext); // {{ theme, toggleTheme }}

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded border border-white bg-transparent text-white font-bold"
    >
      {theme === "light" ? "☀️" : "🌙"} {/*Mostra il sole se il tema è "light", se è "dark" mostra la luna*/}
    </button>
  );
}
