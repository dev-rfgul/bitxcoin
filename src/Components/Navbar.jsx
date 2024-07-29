import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginBtn";
import LogoutButton from "./LogoutBtn";

function Navbar() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="flex justify-between items-center ">
      <div>
        <div className="h-24 w-24 flex items-center">
          <img src="logo.svg" alt="" />
          <h1 className="text-4xl font-bold text-blue-600">BitXCoin</h1>
        </div>
      </div>
      <div className="flex space-x-4">
        <div>
          {isLoading && <div className="text-black">Loading...</div>}
          {isAuthenticated && (
            <>
              <div>
                <LogoutButton />
              </div>
            </>
          )}
          {!isAuthenticated && (
            <>
              <div></div>
              <LoginButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
