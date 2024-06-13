import {
  ArrowRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <h1 className=" font-bold text-3xl ">Mon profil</h1>

      <div className="relative rounded-lg mt-3 border-black border-[1px] p-5 shadow-md">
        <ArrowRightIcon className="w-5 h-5 stroke-2 absolute top-5 right-5" />
        <h2 className="font-semibold">Prenom Nom</h2>
        <span className="text-sm">Gender - Date de naissance</span>
        <div className="flex gap-2 mt-2 text-sm">
          <MapPinIcon className="w-5 h-5 stroke-blue-500 stroke-2" />
          <span>Address</span>
        </div>
        <div className="flex gap-2 mt-2 text-sm">
          <div className="flex gap-2 mr-4">
            <EnvelopeIcon className="w-5 h-5 stroke-blue-500 stroke-2" />{" "}
            <span>mail@gmail.com</span>
          </div>
          <div className="flex gap-2">
            <PhoneIcon className="w-5 h-5 stroke-blue-500 stroke-2" />{" "}
            <span>00 00 00 00 00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
