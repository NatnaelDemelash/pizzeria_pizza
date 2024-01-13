import React from "react";

import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
