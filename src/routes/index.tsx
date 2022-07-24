import { useRoutes } from "react-router-dom";
import RequireAuth from "guard";
import Layout from "layouts";
import Home from "pages/Home";
import Login from "pages/Login";
import Posts from "pages/Posts";
import SignUp from "pages/SignUp";

function Routes() {
  const routes = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "/posts", element: <Posts /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
        // {
        //   element: <RequireAuth children={null} />,
        //   children: [{ path: "/posts", element: <Posts /> }],
        // },
      ],
    },
  ]);
  return routes;
}

export default Routes;
