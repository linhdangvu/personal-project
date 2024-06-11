import {
  CheckIcon,
  DocumentIcon,
  PencilIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const MeetingCard = (props: { data: any; type: string }) => {
  const cardCover =
    "p-3 shadow-md mb-2 border-[0.5px] rounded-lg " +
    (props.type != "modal" && " cursor-pointer ");
  const footerStyle = "text-gray-600 bg-gray-200 px-2 py-1 rounded-md ";
  const iconStyle = "w-6 h-6 p-1 text-gray-600 bg-gray-200 rounded-md";

  const getHoverColor = (type: string) => {
    if (props.type != "modal") {
      switch (type) {
        case "wait":
          return " hover:bg-red-200 ";
        case "confime":
          return "hover:bg-green-200 ";
        case "dispo":
          return "hover:bg-blue-200 ";
        default:
          return " hover:bg-gray-200 ";
      }
    } else {
      return "";
    }
  };
  return (
    <div
      className={
        cardCover +
        (props.data.type == "wait"
          ? " border-red-500  "
          : " border-gray-300 ") +
        getHoverColor(props.data.type)
      }
    >
      {/* HEADER */}
      <div className="flex flex-wrap justify-between items-center">
        <h3 className="font-bold text-xl">{props.data.time}</h3>
        {props.data.type == "pass" && (
          <span className="text-gray-600 bg-gray-100 px-2 py-1 rounded-md uppercase font-semibold text-[10px]">
            passe
          </span>
        )}
        {props.data.type == "wait" && (
          <span className="text-red-600 bg-red-100 px-2 py-1 rounded-md uppercase font-semibold text-[10px]">
            en attente
          </span>
        )}
        {props.data.type == "confime" && (
          <span className="text-green-700 bg-green-100 px-2 py-1 rounded-md uppercase font-semibold text-[10px]">
            confirmé
          </span>
        )}
        {props.data.type == "dispo" && (
          <span className="text-blue-600 bg-blue-100 px-2 py-1 rounded-md uppercase font-semibold text-[10px]">
            disponible
          </span>
        )}
      </div>
      <div className=" border-t-2 my-2"></div>
      {/* Content */}
      {props.data.type == "dispo" ? (
        <div>Temps disponible</div>
      ) : (
        <div>
          <p className="text-gray-500 uppercase font-semibold text-sm">
            {props.data.client}
          </p>
          <p>{props.data.description}</p>

          {/* FOORTER */}
          <div className="flex flex-wrap  justify-between mt-3 text-sm gap-2">
            <div className="flex flex-wrap  gap-2">
              <div className={footerStyle}>{props.data.motif}</div>
              <div className={footerStyle}>{props.data.subject}</div>
            </div>
            {props.data.type == "pass" && (
              <div className="flex flex-wrap ">
                <div className="flex items-center mr-2">
                  <PencilIcon className={iconStyle} />
                  <span className="ml-1">0</span>
                </div>
                <div className="flex items-center">
                  <DocumentIcon className={iconStyle} />{" "}
                  <span className="ml-1">1</span>
                </div>
              </div>
            )}
            {props.data.type == "wait" && (
              <div className="flex items-center flex-wrap bg-gray-200 rounded-full">
                <CheckIcon
                  className={
                    "w-8 h-6 p-1 pl-3 text-green-400 stroke-[4px] bg-gray-200 rounded-l-full " +
                    (props.type == "modal" && "cursor-pointer")
                  }
                />
                <div className=" border-r-[1px] border-gray-700 h-[70%]"></div>
                <XMarkIcon
                  className={
                    "w-8 h-6 p-1 pr-3 text-red-400 stroke-[4px] bg-gray-200 rounded-r-full " +
                    (props.type == "modal" && "cursor-pointer")
                  }
                />
              </div>
            )}
            {props.data.type == "confime" && (
              <div className="flex items-center flex-wrap ">
                <DocumentIcon className={iconStyle + " mr-1"} />{" "}
                <span>1/3</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetingCard;
