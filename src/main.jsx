import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/home";
import ServicesPage from "./pages/services";
import AboutUsPage from "./pages/aboutUs";
import ContactPage from "./pages/contact";

export const domain = "/olivaMetal";
const router = createBrowserRouter([
  {
    path: `${domain}/`,
    element: <HomePage />,
  },
  {
    path: `${domain}/services`,
    element: <ServicesPage />,
  },
  {
    path: `${domain}/about-us`,
    element: <AboutUsPage />,
  },
  {
    path: `${domain}/contact`,
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
