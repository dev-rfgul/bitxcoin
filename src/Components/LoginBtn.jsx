import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-semibold"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    </>
  );
};

export default LoginButton;
