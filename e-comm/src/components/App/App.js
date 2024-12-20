import React from "react";
import Navigation from "../navigation/Navigation.js";
import Login from "../login/Login.js";
import SignUp from "../signup/SignUp.js";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Toggle from "../toggle/Toggle.js";
import ProductCard from "../Product/ProductCard.js";

const router = createBrowserRouter([
    {
      path: "/",
      element:
        <>
          <Navigation/>  
          <Toggle/>
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
          <ProductCard/>
        </div>
    },
  ]);


const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
