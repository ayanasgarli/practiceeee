import Add from "../pages/Add";
import Home from "../pages/Home";
import Wishlist from "../pages/Wishlist";
import MainRoot from "../pages/MainRoot";
import DetailsPage from "../pages/DetailsPage";

export const ROUTES = [
    {
      path: "/",
      element: <MainRoot />,
      children: [
        {
            path: "/",
            element: <Home />,
          },
          {
            path: "/:id",
            element: <DetailsPage />,
          },
          {
              path: "/add",
              element: <Add />,
            },
            {
              path: "/wishlist",
              element: <Wishlist />,
            },
      ],
    },
  ];