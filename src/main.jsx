import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { Analytics } from "@vercel/analytics/react";
import { Provider } from "react-redux";
import { store } from "./app/store";

// Access the environment variable
const auth0ClientId = import.meta.env.VITE_clientId;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-rfgul.us.auth0.com"
      clientId={auth0ClientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 ">
        <App />
        <Analytics />
      </div>
    </Auth0Provider>
  </Provider>
);
