import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const Search = () => {
  return (
    <div>
      <form className="max-w-[300px]">
        <div className="relative ">
          <input
            type="search"
            id="default-search"
            className="block w-[200px] p-2 text-sm  text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Faites une recherche"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-1.5 bottom-[3px] bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm p-2"
          >
            <MagnifyingGlassIcon className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
