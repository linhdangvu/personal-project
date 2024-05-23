import {
  Bars3Icon,
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
          <div>
            <Bars3Icon className="w-10 h-10 text-white" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
