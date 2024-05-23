import FieldMessage from "@/composants/app/chat/field-message";
import ImageMessage from "@/composants/app/chat/image-message";
import ChatText from "@/composants/app/chat/text";
import React from "react";

const Chat = () => {
  const textData = {
    sender: "openai",
    createdTime: "11:11",
    text: ` That's awesome. I think our users will really appreciate the
    improvements. That's awesome. I think our users will really
    appreciate the improvements. That's awesome. I think our users
    will really appreciate the improvements. That's awesome. I think
    our users will really appreciate the improvements.`,
    avatar: "images/chat-icon/bot-text-icon.jpeg",
  };

  const textData2 = {
    sender: "self",
    createdTime: "11:11",
    text: ` That's awesome.`,
    avatar: "images/chat-icon/bot-text-icon.jpeg",
  };

  const imageData = {
    sender: "openai",
    createdTime: "11:11",
    text: "Hello",
    image: `images/chat-icon/bi.jpeg`,
    avatar: "images/chat-icon/bot-text-icon.jpeg",
  };

  const imageData2 = {
    sender: "self",
    createdTime: "11:11",
    text: "Hello",
    image: `images/chat-icon/bi.jpeg`,
    avatar: "images/chat-icon/bot-text-icon.jpeg",
  };

  return (
    <div className="h-[88vh]">
      <div className="overflow-auto max-h-[80vh] no-scrollbar">
        <ChatText message={textData} />
        <ChatText message={textData2} />

        <ImageMessage message={imageData} />
        <ImageMessage message={imageData2} />
        <ChatText message={textData} />
        <ChatText message={textData2} />

        <ImageMessage message={imageData} />
        <ImageMessage message={imageData2} />
      </div>
      <div>
        <FieldMessage />
      </div>
    </div>
  );
};

export default Chat;
