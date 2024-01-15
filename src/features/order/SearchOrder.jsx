import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;
    navigate(`/order/${query}`);

    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order using #order_no"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-[#ffe3e3] text-stone-800 py-2 px-4 w-28 text-sm rounded-full focus:outline-none placeholder:text-stone-500 md:w-64"
      />
    </form>
  );
};

export default SearchOrder;
