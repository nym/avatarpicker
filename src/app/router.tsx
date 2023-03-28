import { createBrowserRouter } from "react-router-dom";
import SetupPage from "../features/setup/SetupPage";
import Home from "../features/home/Home";
import NotFound from "../features/notfound/NotFound";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/edit",
    element: <SetupPage />,
  },
]);
