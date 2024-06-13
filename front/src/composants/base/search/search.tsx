"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Search = (props: any) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    props.handleSearch(search);
    setSearch("");
  };

  return (
    <div>
      <form className="w-full">
        <div className="relative ">
          <input
            id="default-search"
            value={search}
            className="lock p-2 text-sm  text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 w-full pr-10"
            placeholder="Faites une recherche"
            onChange={(e: any) => {
              e.preventDefault();
              setSearch(e.target.value);
            }}
            onKeyDown={(e: any) => {
              if (e.key == "Enter") {
                e.preventDefault();
                props.handleSearch(search);
                setSearch("");
              }
            }}
            required
          />
          <button className="text-white absolute end-1.5 bottom-[3px] bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm p-2">
            <MagnifyingGlassIcon
              className="w-4 h-4"
              onClick={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
