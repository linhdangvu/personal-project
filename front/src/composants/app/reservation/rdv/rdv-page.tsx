"use client";
import WeekDay from "@/composants/base/calendar/week-day";
import Search from "@/composants/base/search/search";
import React from "react";
import CreateAppointment from "../modal/create-appointment";
import MeetingList from "../meeting-list";

const RdvPage = () => {
  return (
    <div>
      {" "}
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

export default RdvPage;
