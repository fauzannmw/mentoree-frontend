import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/icon/mentoree-logo-black.png";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  function handleClick() {
    if (mobile == true) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }

  return (
    <nav class="bg-gray-100 sticky top-0">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          {/* logo */}
          <div>
            <a
              href="#"
              class="flex items-center pt-3 md:py-5 px-2 text-gray-700 hover:text-gray-900"
            >
              <img src={Logo} className="w-44 mr-1" alt="" />
            </a>
          </div>

          {/* primary nav */}
          <div class="hidden md:flex items-center space-x-3">
            <a
              href="/"
              class="py-5 px-3 text-xl font-medium text-gray-700 hover:text-yellow-400 transition duration-300"
            >
              Home
            </a>
            <a
              href="/about-us"
              class="py-5 px-3 text-xl font-medium text-gray-700 hover:text-yellow-400 transition duration-300"
            >
              About Us
            </a>
            <a
              href="/explore"
              class="py-5 px-3 text-xl font-medium text-gray-700 hover:text-yellow-400 transition duration-300"
            >
              Explore
            </a>
          </div>

          {/* secondary nav */}
          <div class="hidden md:flex items-center space-x-3 text-xl font-medium ">
            <a
              href="/login"
              class="py-1.5 px-8 text-gray-700 bg-transparent hover:bg-yellow-400 border border-yellow-300 hover:border-transparent rounded-3xl transition duration-500"
            >
              Masuk
            </a>
            <a
              href="/register"
              class="py-1.5 px-8 text-white bg-yellow-400 hover:bg-yellow-500 rounded-3xl transition duration-300"
            >
              Daftar
            </a>
          </div>

          {/* mobile button goes here */}
          <div class="md:hidden pt-3rr flex items-center">
            <button class="mobile-menu-button" onClick={handleClick}>
              <svg
                class="w-10 h-10"
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

      {mobile == true && (
        <div class="mobile-menu md:hidden py-4">
          <a
            href="#"
            class="block py-2 px-6 text-lg font-medium text-gray-700 hover:text-gray-900"
          >
            Home
          </a>
          <a
            href="#"
            class="block py-2 px-6 text-lg font-medium text-gray-700 hover:text-gray-900"
          >
            About Us
          </a>
          <a
            href="#"
            class="block py-2 px-6 text-lg font-medium text-gray-700 hover:text-gray-900"
          >
            Explore
          </a>
          <a
            href=""
            class="block py-2 px-6 text-lg font-medium text-gray-700 hover:text-gray-900"
          >
            Masuk
          </a>
          <a
            href=""
            class="block py-2 px-6 text-lg font-medium text-gray-700 hover:text-gray-900"
          >
            Daftar
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
