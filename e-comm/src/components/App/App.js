import React from "react";
import Navigation from "../navigation/Navigation.js";
import Login from "../login/Login.js";
import SignUp from "../signup/SignUp.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Toggle from "../toggle/Toggle.js";
import ProductCard from "../Product/ProductCard.js";
import { AuthProvider } from "../../utils/auth.js";
import { RequireAuth } from "../Auth/RequireAuth.js";
import { ProductDetails } from "../Product/ProductDetails.js";
import { ProgressStepper } from "../stepper/ProgressStepper.js";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <>
        <Navigation />
        <RequireAuth><ProductCard /></RequireAuth>
      </>
  },
  {
    path: "/login",
    element:
      <>
        <Navigation />
        <Login />
      </>
  },
  {
    path: "/signup",
    element:
      <div>
        <Navigation />
        <SignUp />
      </div>
  },
  {
    path: "/products",
    element:
      <div>
        <Navigation />
      </div>
  },
  {
    path: "/products/product-detail/:productId",
    element:
      <div>
        <ProgressStepper />
      </div>
  }
]);


const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
