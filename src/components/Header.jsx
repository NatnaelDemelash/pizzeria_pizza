import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

const Header = () => {
  return (
    <header
      className="bg-[#ff8787]  text-stone-100 uppercase tracking-widest px-4 py-3 border-b border-stone-200
     sm:px-6 flex justify-between items-center"
    >
      <Link to="/">Pizzeria Pizza co.</Link>
      <SearchOrder />
      <UserName />
    </header>
  );
};

export default Header;
