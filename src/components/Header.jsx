import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <div>
      <Link to="/">Pizzeria Pizza co.</Link>
      <SearchOrder />
      <p>John</p>
    </div>
  );
};

export default Header;
