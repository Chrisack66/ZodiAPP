import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center p-4 bg-blue-400 shadow-md">
      <ul className="flex gap-6 text-white font-semibold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profilo</Link>
        </li>
        <li>
          <Link to="/compatibility">Compatibilità</Link>
        </li>
        <li>
          <Link to="/signs">Segni</Link>
        </li>
      </ul>

      <div className="ml-6">
        <ThemeToggle />
      </div>
    </nav>
  );
}
