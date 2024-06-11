"use client";

import Dropdown from "@/composants/base/dropdown/dropdown-model";
import { ModelContext } from "@/context/chat-context";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";

const Menu = () => {
  const modelContext = useContext(ModelContext);

  const handleDropdown = (item: any) => {
    modelContext.setNameModel(item.title);
  };

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
            <Dropdown
              dropdownContent={modelContext.modelList}
              handleDropdownData={handleDropdown}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
