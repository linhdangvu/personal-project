import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { ReactNode, useEffect, useState } from "react";

interface IModal {
  title: string;
  titleModal: string;
  children: ReactNode;
  action: ReactNode;
  icon?: ReactNode;
  close?: boolean;
  updateClose: any;
}

const Modal = (props: IModal) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (props.close) {
      setOpenModal(false);
    }
  });
  return (
    <div>
      {props.title !== "" && (
        <button
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          className="block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          type="button"
          onClick={() => {
            setOpenModal(!openModal);

            props.updateClose(openModal);
          }}
        >
          {props.title}
        </button>
      )}
      {props.icon && (
        <div
          onClick={() => {
            setOpenModal(!openModal);
            props.updateClose(openModal);
          }}
        >
          {" "}
          {props.icon}
        </div>
      )}

      {openModal && (
        <div
          id="default-modal"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full backdrop-brightness-50 h-full"
        >
          <div className="relative  p-4 w-10/12  max-h-full mx-auto mt-5">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {props.titleModal}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <XMarkIcon
                    className="w-6 h-6"
                    onClick={() => setOpenModal(false)}
                  />

                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4 text-white">
                {props.children}
              </div>

              <div className="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                {props.action}
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  onClick={() => {
                    setOpenModal(!openModal);
                    props.updateClose(openModal);
                  }}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
