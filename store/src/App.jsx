import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Upload from "./pages/Upload";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/products/:categories",
      element: <ProductList />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/upload",
      element: <Upload />,
    },
  ]);
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
