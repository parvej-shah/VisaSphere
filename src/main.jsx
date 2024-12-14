import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import RegistrationForm from "./components/user/RegistrationForm.jsx";
import LoginForm from "./components/user/LoginForm.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import AddVisaForm from "./components/forms/AddVisaForm.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
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
        path: "/add-visa",
        element: <AddVisaForm />,
      },
      {
        path: "/registration",
        element: <RegistrationForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer/>
    </AuthProvider>
  </StrictMode>
);
