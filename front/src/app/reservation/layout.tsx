"use client";
import { ReservationContext } from "@/context/reservation-context";
import {
  Bars3Icon,
  CalendarDaysIcon,
  HomeIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [currentPath, setSurrentPath] = useState(pathname);

  return (
    <ReservationContext.Provider value={{}}>
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
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800 flex flex-col justify-between">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/reservation"
                className={
                  "flex items-center p-2 rounded-lg text-white group hover:bg-gray-700 cursor-pointer  " +
                  (currentPath == "/reservation" && "bg-gray-700 ")
                }
              >
                <HomeIcon className="w-6 h-6" />
                <span className="ms-3">Home</span>
              </a>
            </li>

            <li>
              <a
                href="/reservation/rdv"
                className={
                  "flex items-center p-2 rounded-lg text-white  group hover:bg-gray-700 cursor-pointer  " +
                  (currentPath == "/reservation/rdv" && "bg-gray-700 ")
                }
              >
                <CalendarDaysIcon className="w-6 h-6" />
                <span className="ms-3">Mes rendez-vous</span>
              </a>
            </li>
          </ul>

          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/reservation/profile"
                className={
                  "flex items-center p-2 rounded-lg text-white  hover:bg-gray-700 cursor-pointer  group " +
                  (currentPath == "/reservation/profile" && "bg-gray-700 ")
                }
              >
                <UserIcon className="w-6 h-6" />
                <span className="ms-3">Mon profil</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">{children}</div>
    </ReservationContext.Provider>
  );
}
