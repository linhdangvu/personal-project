"use client";

import { addFirebaseData, getFirebaseData } from "@/api/firebaseAPI";
import FieldMessage from "@/composants/app/chat/field-message";
import ImageMessage from "@/composants/app/chat/image-message";
import ChatText from "@/composants/app/chat/text";
import SkeletonLoader from "@/composants/base/loading/skeleton-loader";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Timestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const fetchSMS = async () => {
  const response = await getFirebaseData("ChatBot", "Text-to-Text", "OpenAI");
  console.log(response);
  return response;
};

const Chat = () => {
  const [loading, setLoading] = useState(true);

  const query = useQuery({
    queryKey: ["sms"],
    queryFn: fetchSMS,
  });

  const handleSend = async (text: string) => {
    console.log(text);
    //send to Firestore
    await addFirebaseData(
      "ChatBot",
      {
        sender: "self",
        createdTime: Timestamp.fromDate(new Date()),
        text: text,
        avatar: "images/chat-icon/bot-text-icon.png",
      },
      "Text-to-Text",
      "OpenAI"
    );
    query.refetch();
  };

  if (query.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (query.isError) {
    return <h1>Error...</h1>;
  }

  return (
    <div className="h-[88vh]">
      {/* <h1>{books.title}</h1> */}
      <div className="overflow-auto max-h-[80vh] no-scrollbar py-4">
        {query.data &&
          query.data.map((m: any, index: number) => (
            <ChatText message={m} key={index} />
          ))}
        {/* {messages.map((sms: any, index: number) => (
          <ChatText message={sms} key={index} />
        ))} */}
      </div>
      <div>
        <FieldMessage sendMesage={handleSend} />
      </div>
    </div>
  );
};

export default Chat;
