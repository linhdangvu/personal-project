import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Dropdown = (props: {
  handleDropdownData: any;
  dropdownContent: any[];
}) => {
  const [title, setTitle] = useState("Text-to-Text");
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropdown = (item: { title: string; val: string }) => {
    setTitle(item.title);
    props.handleDropdownData(item);

    setOpenDropdown(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            {title}
          </span>
          <ChevronUpDownIcon className="w-4 h-4 m-1" />
        </button>
      </div>
      {openDropdown && (
        <div
          className="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-blue-500 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          {props.dropdownContent.map((item, index) => {
            return (
              <div
                key={index}
                className="py-1 hover:bg-cyan-500 cursor-pointer"
                role="none"
                onClick={() => handleDropdown(item)}
              >
                <span className="text-white block px-4 py-2 text-sm">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
