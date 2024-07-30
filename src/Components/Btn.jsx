import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Btn = ({ btnText }) => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  return (
    <>
      {btnText === "Start Earning" ? (
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-semibold"
          onClick={() => loginWithRedirect()}
        >   
          {btnText}
        </button>
      ) : btnText==="Logout"? (
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-semibold"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          {btnText}
        </button>
      ):""}
    </>
  );
};

export default Btn;
