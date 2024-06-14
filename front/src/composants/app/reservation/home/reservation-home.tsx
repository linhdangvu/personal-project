import Search from "@/composants/base/search/search";
import { avocatData } from "@/data/reservation-data";
import { CheckBadgeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const ReservationHome = () => {
  const [filteredDara, setFilteredData] = useState(avocatData);
  const [searchData, setSearchData] = useState(avocatData);
  const [isAccepted, setAccepted] = useState(false);

  const tagSuggestion =
    "px-3 py-1 text-white font-semibold text-sm bg-gray-500 mr-2 rounded-full";

  const getSearch = (val: string) => {
    console.log(val);
    if (val == "") {
      setFilteredData(avocatData);
      setSearchData(avocatData);
    } else {
      const ndata = avocatData.filter((item: any) => {
        return (
          item.name.match(new RegExp(val, "i")) ||
          item.fonction.match(new RegExp(val, "i")) ||
          item.addresse.match(new RegExp(val, "i"))
        );
      });
      setSearchData(ndata);
      setFilteredData(ndata);
    }
  };

  useEffect(() => {
    console.log(isAccepted);
    if (isAccepted) {
      const ndata = filteredDara.filter((item) => item.acceptedRdv == true);
      setFilteredData(ndata);
    } else {
      setFilteredData(searchData);
    }
  }, [isAccepted]);

  return (
    <div>
      <h1 className=" font-bold text-3xl ">Liste des avocats</h1>

      <div className="my-5 flex justify-between items-center w-full">
        <div className="w-[70%]">
          <Search handleSearch={getSearch} />

          <div className="flex flex-wrap gap-2 mt-2">
            <span className="font-semibold">Suggérés:</span>
            <span className={tagSuggestion}>Notaires</span>
            <span className={tagSuggestion}>Commissaires de justice</span>
            <span className={tagSuggestion}>Avocats</span>
          </div>
        </div>

        <div className="flex flex-col items-end w-[30%]">
          <label className="inline-flex items-center cursor-pointer mb-2">
            <input
              type="checkbox"
              checked={isAccepted}
              onChange={() => {
                setAccepted(!isAccepted);
              }}
              className="sr-only peer"
            ></input>
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-100 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-400"></div>
            <span className="ms-3 text-sm text-black ">Accepte les RDV</span>
          </label>
          <span className="text-sm font-semibold">123 résultats</span>
        </div>
      </div>

      <div className="grid gap-2 grid-cols-2">
        {filteredDara.length == 0 && <p>No avocat found.</p>}
        {filteredDara &&
          filteredDara.map((item) => (
            <div
              key={item.id}
              className="border-black p-3 shadow-md mb-2 border-[0.5px] rounded-lg w-full"
            >
              <div className="flex gap-2">
                <div className=" relative w-[60px] h-[60px] bg-blue-100 rounded-full mr-3">
                  {item.verified && (
                    <CheckBadgeIcon className="w-5 h-5 absolute bg-blue-500 rounded-full text-white p-[0.7px] right-0 bottom-0" />
                  )}
                </div>
                <div>
                  <div className="px-2 py-1 border-blue-500 text-blue-500 uppercase border-[1px] text-[10px] text-center rounded-lg mb-1">
                    {item.fonction}
                  </div>
                  <h2 className="font-semibold text-xl">{item.name}</h2>
                </div>
              </div>
              <p className="flex mt-3">
                <MapPinIcon className="w-5 h-5 mr-2" />

                <span>{item.addresse}</span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReservationHome;
