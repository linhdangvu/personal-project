import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const WeekDay = () => {
  return (
    <div>
      <div className="flex items-center">
        <ChevronLeftIcon className="w-3 h-3 stroke-2" />
        <div className="flex items-center mx-4">
          <CalendarIcon className="w-6 h-6 mr-2 text-blue-500 stroke-1" />
          <span className="text-sm">Mercredi 9/08 - Vedredi 11/08</span>
        </div>
        <ChevronRightIcon className="w-3 h-3 stroke-2" />
      </div>
    </div>
  );
};

export default WeekDay;
