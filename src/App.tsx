import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/main";
import Detail from "./components/detail";
import { AppProvider } from "./context/AppProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "detail/:id",
    element: <Detail />,
  },
]);

const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;
