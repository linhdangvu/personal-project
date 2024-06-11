import Modal from "@/composants/base/modal/modal";
import React, { useState } from "react";
import MeetingCard from "../card/metting-card";

const MeetingModal = (props: { data: any }) => {
  const [isClose, setIsClose] = useState(false);

  const handleClose = (isOpen: boolean) => {
    setIsClose(isOpen);
  };

  return (
    <div>
      <Modal
        titleModal={props.data.time}
        customButton={<MeetingCard data={props.data} type="" />}
        updateClose={handleClose}
        action={<div></div>}
        customContent={
          <div className=" relative z-[100] bg-white rounded-lg shadow mt-[10rem] w-[60%]">
            <MeetingCard data={props.data} type="modal" />
          </div>
        }
      ></Modal>
    </div>
  );
};

export default MeetingModal;
