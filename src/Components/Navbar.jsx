

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import Btn from "./Btn";

// function Navbar() {
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   return (
//     <div className="flex flex-col sm:flex-row sm:justify-between items-center p-4 bg-white shadow-md">
//       <div className="flex items-center mb-4 sm:mb-0">
//         <img src="logo.svg" alt="Logo" className="w-16 h-16 sm:w-24 sm:h-24" />
//         <h1 className="text-2xl sm:text-4xl font-bold text-blue-600 ml-2">
//           BitXCoin
//         </h1>
//       </div>
//       <div className="flex space-x-2 sm:space-x-4">
//         {isLoading && (
//           <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16">
//             <div className="w-full h-full border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//           </div>
//         )}
//         {isAuthenticated ? (
//           <Btn btnText="Logout" />
//         ) : (
//           <Btn btnText="Start Earning" />
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;


import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Btn from "./Btn";

function Navbar() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center mb-4 sm:mb-0">
        <img src="logo.svg" alt="Logo" className="w-16 h-16 sm:w-24 sm:h-24" />
        <h1 className="text-2xl sm:text-4xl font-bold text-blue-600 ml-2">
          BitXCoin
        </h1>
      </div>
      <div className="flex space-x-2 sm:space-x-4">
        {isLoading && (
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {isAuthenticated ? (
          <Btn btnText="Logout" />
        ) : (
          <Btn btnText="Start Earning" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
