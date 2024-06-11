import Modal from "@/composants/base/modal/modal";
import { CalendarIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const CreateAppointment = () => {
  const [isClose, setIsClose] = useState(false);

  const handleClose = (isOpen: boolean) => {
    setIsClose(isOpen);
  };

  return (
    <div>
      <Modal
        titleModal="Créer un rendez-vous"
        children={<div></div>}
        action={<div></div>}
        customButton={
          <div className="flex flex-wrap bg-gray-800 py-2 justify-center items-center px-4 rounded-full text-white  hover:bg-gray-300 hover:text-black">
            <CalendarIcon className="w-5 h-5 mr-2 " />
            <span className=" text-sm">Créer un rendez-vous</span>
          </div>
        }
        updateClose={handleClose}
      ></Modal>
    </div>
  );
};

export default CreateAppointment;
