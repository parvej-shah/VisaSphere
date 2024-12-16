import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddVisaForm from "./pages/AddVisaForm.jsx";
import RegistrationForm from "./components/user/RegistrationForm.jsx";
import LoginForm from "./components/user/LoginForm.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
// import AddVisaForm from "./components/visaforms/AddVisaForm.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import AllVisas from "./pages/AllVisas.jsx";
import VisaDetails from "./pages/VisaDetails.jsx";
import MyAddedVisas from "./pages/MyAddedVisas.jsx";
import MyVisaApplications from "./pages/MyVisaApplications.jsx";
import PrivateRoute from "./AuthProvider/PrivateRoute.jsx";
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
        element:<PrivateRoute><AddVisaForm/></PrivateRoute> ,
      },
      {
        path: "/all-visas",
        element: <AllVisas/>,
      },
      {
        path: "/my-added-visas",
        element:<PrivateRoute><MyAddedVisas/></PrivateRoute> ,
      },
      {
        path: "/my-applications",
        element:<PrivateRoute><MyVisaApplications/></PrivateRoute>,
      },
      {
        path: "/visa-details/:id",
        element:<PrivateRoute><VisaDetails/></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/all-visas/${params.id}`)
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
