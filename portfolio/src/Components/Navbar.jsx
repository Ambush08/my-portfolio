import { useState } from "react";
import { menu } from "../Backend/data";

import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <header className="w-full p-8 shadow-lg bg-background z-20 position-fixed">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-heading">
        <Link
          to="home"
          className="text-2xl font-extrabold lg:text-4xl cursor-pointer"
        >
          Ambush.<span className="text-primary text-heading">Dev</span>
        </Link>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`text-2xl cursor-pointer lg:hidden z-95 ${isOpen && "text-white"}`}
        >
          {isOpen ? (
            <i className="fa-solid fa-x"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
        <ul
          className={`${isOpen ? "block" : "hidden"} ${isOpen ? "nav-active" : ""} lg:flex lg:justify-between lg:items-center lg:gap-5 lg:font-bold text-heading text-lg`}
        >
          {menu.map((item) => {
            return (
              <li key={item.label} className="hover:text-primary">
                <Link
                  to={item.url}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}

          {isOpen && (
            <div className="flex items-center justify-center gap-3">
              <li>
                <Link
                  to="contacts"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="border border-white px-2 py-1 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  Connect
                  <i class="fa-solid fa-arrow-right"></i>
                </Link>
              </li>

              <li>
                <button
                  onClick={toggleTheme}
                  className={`text-xl ${
                    theme === "dark" ? "text-white border-white" : "text-text border-text"
                  } border rounded-full p-1 cursor-pointer`}
                >
                  {theme === "dark" ? (
                    <i className="fa-solid fa-sun"></i>
                  ) : (
                    <i className="fa-solid fa-moon"></i>
                  )}
                </button>
              </li>
            </div>
          )}
        </ul>
        <div className="hidden lg:flex lg:items-center lg:gap-3 lg:justify-center">
          <Link
            to="contacts"
            className="border-1 border-primary px-3 py-2 rounded-lg hover:bg-primary hover:text-white hover:transition-colors duration-300"
          >
            Connect
            <i class="fa-solid fa-arrow-right"></i>
          </Link>
          <button
            onClick={toggleTheme}
            className={`text-xl ${theme === "dark" ? "text-white" : "text-primary"} border-1 rounded-full p-1 cursor-pointer`}
          >
            {theme === "dark" ? (
              <i class="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
