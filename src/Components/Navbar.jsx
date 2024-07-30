import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Btn from "./Btn";
import LoginButton from "./LoginBtn";
import LogoutButton from "./LogoutBtn";

function Navbar() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="flex  justify-between items-center ">
      <div>
        <div className="h-24 w-24 flex items-center">
          <img src="logo.svg" alt="" />
          <h1 className="text-4xl font-bold text-blue-600">BitXCoin</h1>
        </div>
      </div>
      <div className="flex space-x-4">
        <div>
          {isLoading && (
            <div className="flex items-center justify-center h-screen">
              <div className="w-44 h-44 border-8 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          {isAuthenticated && (
            <>
              <div>
                {/* <LogoutButton /> */}
                <Btn btnText="Logout"/>
              </div>
            </>
          )}
          {!isAuthenticated && (
            <div>
              {/* <LoginButton /> */}
              <Btn btnText="Start Earning"/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
