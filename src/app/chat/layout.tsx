"use client";
import Menu from "@/composants/app/menu/menu";
import { ModelContext } from "@/context/chat-context";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [nameModel, setNameModel] = useState<string>("Text-to-Text");
  const modelList = [
    { title: "Text-to-Text", val: "TtoT" },
    { title: "Text-to-Image", val: "TtoI" },
    { title: "Image-to-Text", val: "ItoT" },
  ];

  return (
    <ModelContext.Provider value={{ nameModel, setNameModel, modelList }}>
      <div className="bg-blue-200 w-screen h-screen">
        <div className="h-screen-[10vh]">
          <Menu />
        </div>
        <div className="w-full h-screen-[90vh] px-4">{children}</div>
      </div>
    </ModelContext.Provider>
  );
}
