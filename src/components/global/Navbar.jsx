import React from "react";
import { navLinks } from "../../utils/nav";
import { Link } from "react-router-dom";
import ThemeController from "./ThemeController";

export default function Navbar() {
  return (
    <nav className="navbar bg-primary text-primary-content absolute shadow-md shadow-primary">
      <ul className="flex gap-2.5 px-5 font-bold mx-auto relative w-full">
        {navLinks.map((item) => {
          return (
            <li key={item.id} className="capitalize">
              <Link to={item.navLink} className="flex gap-1">
                <div className="w-5">{item.navIcon}</div>
                <p>{item.navName}</p>
              </Link>
            </li>
          );
        })}
        <div className="absolute right-2">
          <ThemeController />
        </div>
      </ul>
    </nav>
  );
}
