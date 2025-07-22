import { createBrowserRouter } from "react-router";

import App from "./App";
import AddCover from "./pages/AddCover/AddCover";
import DetailPage from "./pages/DetailPage/DetailPage";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-cover",
        element: <AddCover />,
      },
      {
        path: "/detail-page/:id",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
