import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Btn from "./Btn";

function Navbar() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center mb-4 sm:mb-0">
          <img
            src="logo.svg"
            alt="Logo"
            className="w-16 h-16 sm:w-24 sm:h-24"
          />
          <h1 className="text-2xl sm:text-4xl font-bold text-blue-600 ml-2">
            BitXCoin
          </h1>
        </div>
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-blue-600 hover:text-blue-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              {/* <ul className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Contact
                  </a>
                </li>
              </ul> */}

              <div className="mt-2 sm:mt-0">
                {isAuthenticated ? (
                  <Btn btnText="Logout" />
                ) : (
                  <Btn btnText="Start Earning" />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;