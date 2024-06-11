"use client";

import Button from "@/composants/base/button/button";
import { useRouter } from "next/navigation";
import React from "react";

const Homepage = () => {
  const router = useRouter();

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex gap-5 flex-col">
        <div className=" text-wrap text-center border-2 w-fit p-6 m-auto">
          <h1 className="text-3xl">Welcome to chatbot</h1>
          <div className="mt-4">
            <Button
              bgColor="blue"
              title="New chat"
              onClick={() => router.push("chat")}
            />
          </div>
        </div>

        <div className=" text-wrap text-center border-2 w-fit p-6 m-auto">
          <h1 className="text-3xl">Welcome to reservation</h1>
          <div className="mt-4">
            <Button
              bgColor="red"
              title="New reservation"
              onClick={() => router.push("reservation")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
