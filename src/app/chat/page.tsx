"use client";

import FieldMessage from "@/composants/app/chat/field-message";
import ImageMessage from "@/composants/app/chat/image-message";
import ChatText from "@/composants/app/chat/text";
import { ModelContext } from "@/context/chat-context";
import { useChatbot } from "@/hooks/useChatbot";
// import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";

const Chat = () => {
  const chatbot = useChatbot();
  const modelContext = useContext(ModelContext);

  const handleSend = async (text: string) => {
    //send to Firestore
    if (
      modelContext.nameModel === "Text-to-Text" ||
      modelContext.nameModel === "Text-to-Image"
    ) {
      await chatbot.addMessage(text, modelContext.nameModel);
    } else if (modelContext.nameModel === "Image") {
      await chatbot.addImage(text, "");
    }
  };

  if (chatbot.queryChatbot.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (chatbot.queryChatbot.isError) {
    return <h1>Error...</h1>;
  }

  return (
    <div className="h-[88vh]">
      <div className="overflow-auto max-h-[80vh] no-scrollbar py-4">
        {chatbot.queryChatbot.data &&
          chatbot.queryChatbot.data.map((m: any, index: number) => (
            <div key={index}>
              {m.type === "text" && <ChatText message={m} />}
              {m.type === "image" && <ImageMessage message={m} />}
            </div>
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
