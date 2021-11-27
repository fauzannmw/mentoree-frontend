import React, { useEffect, useState } from "react";
import Logo from "../../assets/icon/mentoree-logo-black.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [IsloggedIn, setIsLoggedIn] = useState(false);

  function handleClick() {
    if (mobile === true) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }
  useEffect(() => {
    const checkLocalStorage = () => {
      if (localStorage.getItem("token") === null) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    };
    window.addEventListener("storage", checkLocalStorage);
    checkLocalStorage();
  }, []);

  function onLogout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  return (
    <nav className="bg-gray-100 sticky top-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* logo */}
          <div>
            <Link
              to="/"
              className="flex items-center pt-3 md:py-5 px-2 text-gray-700 hover:text-gray-900"
            >
              <img src={Logo} className="w-44 mr-1" alt="" />
            </Link>
          </div>

          {/* primary nav */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/"
              className="py-5 px-3 text-xl font-medium text-gray-700 hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="py-5 px-3 text-xl font-medium text-gray-700 hover:text-yellow-400 transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/explore"
              className="py-5 px-3 text-xl font-medium text-gray-700 hover:text-yellow-400 transition duration-300"
            >
              Explore
            </Link>
          </div>

          {!IsloggedIn ? (
            <div className="hidden md:flex items-center space-x-3 text-xl font-medium ">
              <Link
                to="/login-gateaway"
                className="py-1.5 px-8 text-gray-700 bg-transparent hover:bg-yellow-400 border border-yellow-300 hover:border-transparent rounded-3xl transition duration-500"
              >
                Masuk
              </Link>
              <Link
                to="/register-gateaway"
                className="py-1.5 px-8 text-white bg-yellow-400 hover:bg-yellow-500 rounded-3xl transition duration-300"
              >
                Daftar
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-3 text-xl font-medium ">
              <Link
                to="/"
                className="py-1.5 px-8 text-gray-700 bg-transparent hover:bg-yellow-400 border border-yellow-300 hover:border-transparent rounded-3xl transition duration-500"
                onClick={onLogout}
              >
                Keluar
              </Link>
            </div>
          )}

          {/* mobile button goes here */}
          <div className="md:hidden pt-3rr flex items-center">
            <button className="mobile-menu-button" onClick={handleClick}>
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobile === true && (
        <div className="mobile-menu md:hidden py-4 transition duration-1000">
          <a
            href="/"
            className="block py-2 px-6 text-lg font-medium text-gray-700 hover:text-gray-900"
          >
            Home
          </a>
          <a
            href="/about-us"
            className="block py-2 px-6 text-lg font-medium text-gray-700 hover:text-gray-900"
          >
            About Us
          </a>
          <a
            href="/explore"
            className="block py-2 px-6 text-lg font-medium text-gray-700 hover:text-gray-900"
          >
            Explore
          </a>
          {!IsloggedIn ? (
            <>
              <a
                href="/login-gateaway"
                className="block py-2 px-6 text-lg font-medium text-gray-700 hover:text-gray-900"
              >
                Masuk
              </a>
              <a
                href="/register-gateaway"
                className="block py-2 px-6 text-lg font-medium text-gray-700 hover:text-gray-900"
              >
                Daftar
              </a>
            </>
          ) : (
            <>
              <a
                href="/"
                className="block py-2 px-6 text-lg font-medium text-gray-700 hover:text-gray-900"
                onClick={onLogout}
              >
                Keluar
              </a>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
