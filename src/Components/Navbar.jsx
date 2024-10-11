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

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div>
//       <div className="flex justify-between pl-11 pr-11 h-16 text-center bg-blue-900 text-black">
//         <div>
//           <img className="w-1/2" src="/images/logo-n4 (2).png" alt="logo" />
//         </div>
//         <div className="hidden md:flex m-4">
//           <ul className="flex space-x-11">
//             <li className="text-md">
//               <Link className="hover:text-gray-700" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="text-md">
//               <Link className="hover:text-gray-700" to="/about">
//                 About
//               </Link>
//             </li>
//             <li className="text-md">
//               <Link className="hover:text-gray-700" to="/services">
//                 Services
//               </Link>
//             </li>
//             <li className="text-md">
//               <Link className="hover:text-gray-700" to="/testimonials">
//                 Testimonials
//               </Link>
//             </li>
//             <li className="text-md">
//               <Link className="hover:text-gray-700" to="/contact">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="md:hidden m-4 flex items-center">
//           <button onClick={toggleMenu} className="text-xl">
//             &#9776;
//           </button>
//         </div>
//       </div>
//       {menuOpen && (
//         <div className="md:hidden bg-white text-black px-11 py-4">
//           <ul>
//             <li className="py-2 border-b border-gray-300">
//               <Link className="block hover:text-gray-700" to="/" onClick={toggleMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className="py-2 border-b border-gray-300">
//               <Link className="block hover:text-gray-700" to="/about" onClick={toggleMenu}>
//                 About
//               </Link>
//             </li>
//             <li className="py-2 border-b border-gray-300">
//               <Link className="block hover:text-gray-700" to="/services" onClick={toggleMenu}>
//                 Services
//               </Link>
//             </li>
//             <li className="py-2 border-b border-gray-300">
//               <Link className="block hover:text-gray-700" to="/testimonials" onClick={toggleMenu}>
//                 Testimonials
//               </Link>
//             </li>
//             <li className="py-2">
//               <Link className="block hover:text-gray-700" to="/contact" onClick={toggleMenu}>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
