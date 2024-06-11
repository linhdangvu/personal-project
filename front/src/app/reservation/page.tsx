"use client";
import MeetingList from "@/composants/app/reservation/meeting-list";
import CreateAppointment from "@/composants/app/reservation/modal/create-appointment";
import WeekDay from "@/composants/base/calendar/week-day";
import Search from "@/composants/base/search/search";
import { btnData } from "@/data/reservation-data";
import { InboxIcon } from "@heroicons/react/24/outline";

import React, { useState } from "react";

const Reservation = () => {
  return (
    <div>
      <h1 className=" font-bold text-3xl ">Mes rendez-vous</h1>

      <div className="flex flex-wrap justify-between items-center px-2 mt-2">
        <WeekDay />

        <div className="flex flex-wrap gap-2">
          <Search />
          <CreateAppointment />
        </div>
      </div>

      <MeetingList />
    </div>
  );
};

export default Reservation;
