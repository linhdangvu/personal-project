import { btnData, exampleData } from "@/data/reservation-data";
import { InboxIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import MeetingCard from "./card/metting-card";
import Modal from "@/composants/base/modal/modal";
import MeetingModal from "./modal/meeting-modal";

const MeetingList = () => {
  const [currentButton, setCurrentButton] = useState("tous");

  const filterData = (moment: string, list: any[]) => {
    if (currentButton === "tous") {
      return list.filter((m) => m.moment == moment);
    } else {
      return list.filter((m) => m.moment == moment && m.type == currentButton);
    }
  };

  const btnFilter =
    "px-4 py-1 rounded-full text-sm hover:bg-gray-800 hover:text-white ";
  const btnActive = "bg-gray-800 text-white";
  const btnNotActive = "bg-gray-200 text-black";
  return (
    <div>
      <div className="flex justify-between mt-4">
        <div className="flex flex-wrap gap-2">
          {btnData.map((item) => (
            <button
              className={
                btnFilter +
                (currentButton == item.value ? btnActive : btnNotActive)
              }
              key={item.id}
              onClick={() => setCurrentButton(item.value)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <button className="flex text-sm text-red-500 font-semibold bg-red-50 px-2 py-1 rounded-md">
          <InboxIcon className="w-5 h-5 mr-2 stroke-2" />
          <span>5 demandes en attente</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {exampleData.map((item) => (
          <div key={item.date}>
            <h2 className="font-semibold">{item.date}</h2>

            <p className="mt-2 mb-3 text-gray-500">Matinée</p>
            {filterData("morning", item.meeting).length == 0 ? (
              <div className="text-red-400 font-semibold text-sm">
                No calendar
              </div>
            ) : (
              <div>
                {filterData("morning", item.meeting).map((item2, id2) => (
                  <MeetingModal key={id2} data={item2} />
                ))}
              </div>
            )}

            <p className="mt-6 mb-3 text-gray-500">Après-midi</p>
            {filterData("evening", item.meeting).length == 0 ? (
              <div className="text-red-400 font-semibold text-sm">
                No calendar
              </div>
            ) : (
              <div>
                {filterData("evening", item.meeting).map((item2, id2) => (
                  <MeetingModal key={id2} data={item2} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingList;
