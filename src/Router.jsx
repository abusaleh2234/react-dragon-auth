import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root/Root";
import Home from "./pages/Home/Home";
import Login from "./component/Login/Login";
import Register from "./component/Login/Register";
import NewsDetails from "./pages/Home/NewsDetals/NewsDetails";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("news.json")
        },
        {
          path: "/news/:id",
          element: <PrivetRoute><NewsDetails></NewsDetails></PrivetRoute>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
  ]);