import React from "react";

import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "./Spinner";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Spinner />}
      <Header />
      <div>
        <Outlet />
      </div>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
