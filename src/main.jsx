import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { Analytics } from "@vercel/analytics/react"
import { Provider } from "react-redux";
// import store from "./app/store"

import {store} from "./app/store"
// import {AppProvider} from "./context/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(

  <Provider store={store}>
  <Auth0Provider
    domain="dev-rfgul.us.auth0.com"
    // client id for bitxcoin.vercel.app
    // clientId="RrDDoX3no1VO4eXru9kSqGcG9ellsclR"

    // client id for localhost
     clientId="q3z8KOkgkQ6H7hj3iKgSUvUerqYROhRj"


    // client id for production
    //clientId="Zd6eDVg5AEqNcgdTNhJ9lfU4oGGe4FlM"

    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <div className="px-6 md:px-12 lg:px-20 xl:px-32 ">
      <App />
      <Analytics/>
    </div>
  </Auth0Provider>
  </Provider>
);
