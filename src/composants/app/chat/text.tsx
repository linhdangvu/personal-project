import { useChatbot } from "@/hooks/useChatbot";
import { useDatetime } from "@/services/datetime";
import { TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

interface Text {
  id: string;
  sender: string;
  createdTime: any;
  text: string;
  avatar: string;
}

const Text = (props: { message: Text }) => {
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
          (props.message.sender == "self" ? "flex-row-reverse " : "") +
          "flex items-start gap-2.5"
        }
      >
        <img
          className="w-12 h-12 rounded-full bg-white border-2 border-black"
          src={props.message.avatar}
          alt="Bot Text"
        ></img>
        <div className="flex flex-col gap-1 w-full max-w-[480px]">
          <div
            className={
              "flex flex-col leading-1.5 p-4 border-gray-200 bg-blue-700 rounded-b-xl " +
              (props.message.sender == "self"
                ? "rounded-tl-xl"
                : "rounded-tr-xl")
            }
          >
            <p className="text-sm font-normal text-white">
              {props.message.text}
            </p>
          </div>
          <div
            className={
              props.message.sender == "self" ? "text-left" : "text-right"
            }
          >
            <span className=" text-sm font-normal text-black">
              {datetime.convertFirebaseDate(props.message.createdTime)}
            </span>
          </div>
          {/* <span className="text-sm font-normal text-black">Loading...</span> */}
        </div>

        <div className="p-2 rounded-full cursor-pointer text-red-500 hover:text-white hover:bg-red-500 ">
          <TrashIcon className="w-6 h-6 " onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default Text;
