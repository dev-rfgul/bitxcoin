import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

// import {AppProvider} from "./context/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-rfgul.us.auth0.com"
    clientId="RrDDoX3no1VO4eXru9kSqGcG9ellsclR"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <div className="px-6 md:px-12 lg:px-20 xl:px-32 ">
      <App />
    </div>
  </Auth0Provider>
);
