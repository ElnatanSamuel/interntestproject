import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage";
import AddFilePage from "../../pages/AddFilePage";
import EditSong from "../../pages/EditSong";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/addfile",
        element: <AddFilePage />,
      },
      {
        path: "/editfile/:id",
        element: <EditSong />,
      },
    ],
  },
]);

export default router;
