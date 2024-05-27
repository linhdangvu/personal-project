import { useChatbot } from "@/hooks/useChatbot";
import { useDatetime } from "@/services/datetime";
import { ArrowDownTrayIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

interface ImageSMS {
  id: string;
  sender: string;
  createdTime: string;
  image: string;
  avatar: string;
  text: string;
}

const ImageMessage = (props: { message: ImageSMS }) => {
  const datetime = useDatetime();
  const chatbot = useChatbot();

  const handleDelete = async () => {
    console.log(props.message.id);
    await chatbot.deleteMessage(props.message.id);
  };

  return (
    <div>
      <div
        className={
          "flex items-start gap-2.5 " +
          (props.message.sender == "self" ? "flex-row-reverse" : "")
        }
      >
        <img
          className="w-12 h-12 rounded-full bg-white border-2 border-black"
          src={props.message.avatar}
          alt="Self"
        ></img>
        <div className="flex flex-col gap-1">
          <div
            className={
              "flex flex-col w-full max-w-[300px] leading-1.5 p-4 border-gray-200 bg-blue-700 rounded-b-xl " +
              (props.message.sender == "self"
                ? "rounded-tl-xl"
                : "rounded-tr-xl")
            }
          >
            {props.message.text !== "" && (
              <p className="text-sm font-normal text-white">
                {props.message.text}
              </p>
            )}
            <div className="group relative my-2.5">
              <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <button
                  data-tooltip-target="download-image"
                  className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
                >
                  <ArrowDownTrayIcon className="w-6 h-6 text-white" />
                </button>
                <div
                  id="download-image"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Download image
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
              <img src={props.message.image} className="rounded-lg" />
            </div>
          </div>
          <div
            className={
              props.message.sender == "self" ? "text-left" : "text-right"
            }
          >
            <span className="text-sm font-normal text-black">
              {datetime.convertFirebaseDate(props.message.createdTime)}
            </span>
          </div>
        </div>
        <div className="p-2 rounded-full cursor-pointer text-red-500 hover:text-white hover:bg-red-500 ">
          <TrashIcon className="w-6 h-6 " onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default ImageMessage;
