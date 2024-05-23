import React from "react";

interface ImageSMS {
  sender: string;
  createdTime: string;
  image: string;
  avatar: string;
  text: string;
}

const ImageMessage = (props: { message: ImageSMS }) => {
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
            <p className="text-sm font-normal text-white">
              {props.message.text}
            </p>
            <div className="group relative my-2.5">
              <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <button
                  data-tooltip-target="download-image"
                  className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                    />
                  </svg>
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
              {props.message.createdTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageMessage;
