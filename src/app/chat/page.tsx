"use client";

import FieldMessage from "@/composants/app/chat/field-message";
import ChatText from "@/composants/app/chat/text";
import { useChatbot } from "@/hooks/useChatbot";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Chat = () => {
  const chatbot = useChatbot();

  const handleSend = async (text: string) => {
    //send to Firestore
    await chatbot.addMessage(text);
  };

  if (chatbot.queryChatbot.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (chatbot.queryChatbot.isError) {
    return <h1>Error...</h1>;
  }

  return (
    <div className="h-[88vh]">
      {/* <h1>{books.title}</h1> */}
      <div className="overflow-auto max-h-[80vh] no-scrollbar py-4">
        {chatbot.queryChatbot.data &&
          chatbot.queryChatbot.data.map((m: any, index: number) => (
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
