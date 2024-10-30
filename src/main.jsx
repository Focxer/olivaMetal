import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/home";
import ServicesPage from "./pages/services";
import AboutUsPage from "./pages/aboutUs";
import ContactPage from "./pages/contact";
import { Globals } from "./globals";

export const domain = "/olivaMetal";
const router = createHashRouter([
  {
    path: Globals.routes.home,
    element: <HomePage />,
  },
  {
    path: Globals.routes.services,
    element: <ServicesPage />,
  },
  {
    path: Globals.routes.aboutUs,
    element: <AboutUsPage />,
  },
  {
    path: Globals.routes.contact,
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
