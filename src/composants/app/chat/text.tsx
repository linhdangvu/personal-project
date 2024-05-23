import React from "react";

interface Text {
  sender: string;
  createdTime: string;
  text: string;
  avatar: string;
}

const Text = (props: { message: Text }) => {
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
              {props.message.createdTime}
            </span>
          </div>
          {/* <span className="text-sm font-normal text-black">Loading...</span> */}
        </div>
      </div>
    </div>
  );
};

export default Text;
