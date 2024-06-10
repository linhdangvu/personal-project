import { Bars3Icon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import React from "react";

const Reservation = () => {
  return (
    <div>
      <button
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3  text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 border-2"
      >
        <Bars3Icon className=" w-5 h-5" />
      </button>

      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg text-white  bg-gray-700 group"
              >
                <CalendarDaysIcon className="w-6 h-6" />
                <span className="ms-3">Reservation</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64"></div>
    </div>
  );
};

export default Reservation;
