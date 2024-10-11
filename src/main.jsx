import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { Analytics } from "@vercel/analytics/react";
import { Provider } from "react-redux";
import { store } from "./app/store";

import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Route } from "react-router-dom";
import Banner from "../src/Components/Banner.jsx";
// import Banner from "../src/Components/Banner2.jsx"
import Games from "../src/Games/Game.jsx";
import Contact from "../src/Contact/Contact.jsx";
import Payment from "../src/Payment/Payment.jsx";
import Navbar from "../src/Components/Navbar.jsx";
import Testimonial from "./Testimonials/Testimonial.jsx";

// Access the environment variable
const auth0ClientId = import.meta.env.VITE_clientId;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Banner />}>
      {/* <Route path ="" element={}/> */}
      <Route path="games" element={<Games />} />
      <Route path="payment" element={<Payment />} />
      <Route path="testimonial"element={<Testimonial />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

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
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <Analytics />
      </div>
    </Auth0Provider>
  </Provider>
);
