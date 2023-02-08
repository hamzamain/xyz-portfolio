import Main from "../../layout/Main";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../pages/Home/Home/Home");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
      },
      {
        path: "companies",
      },
      {
        path: "resource",
      },
      {
        path: "contact",
      },
    ],
  },
]);
