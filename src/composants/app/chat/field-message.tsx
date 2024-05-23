"use client";

import { PhotoIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";

const FieldMessage = () => {
  const textareaRef: any = useRef(null);
  const [text, setText] = useState("");

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <div className="fixed w-4/5 bottom-3 left-1/2 -translate-x-2/4 ">
      <form>
        <label htmlFor="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-center px-3 py-2 rounded-lg bg-blue-600">
          <button
            type="button"
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          >
            <PhotoIcon className="text-white h-6 w-6" />

            <span className="sr-only">Upload image</span>
          </button>

          <textarea
            ref={textareaRef}
            id="chat"
            value={text}
            onChange={handleChange}
            className="block mx-4 p-2.5 w-full text-sm text-black bg-blue-100 rounded-lg border  focus:ring-blue-500 focus:border-blue-500  border-gray-600 placeholder-gray-500 overflow-hidden resize-none"
            placeholder="Your message..."
          ></textarea>
          <button
            type="submit"
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
          >
            <PaperAirplaneIcon className="text-white h-6 w-6" />
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FieldMessage;
