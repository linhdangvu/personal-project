import {
  ChevronUpDownIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Menu = () => {
  return (
    <div>
      <nav className=" border-blue-900 bg-blue-950">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <ChatBubbleBottomCenterTextIcon className="w-10 h-10 text-white" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Chatbot
            </span>
          </a>

          <div className="">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Text-to-Text
              </span>
              <ChevronUpDownIcon className="w-4 h-4 m-1" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
