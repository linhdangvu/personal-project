"use client"

import FieldMessage from "@/composants/app/chat/field-message";
import ImageMessage from "@/composants/app/chat/image-message";
import ChatText from "@/composants/app/chat/text";
import React, { useEffect, useState } from "react";

const Chat = () => {

  const [messages, setMessages]:any = useState([])
  const [loading, setLoading] = useState(true)


  const textData = {
    sender: "openai",
    createdTime: "11:11",
    text: ` That's awesome. `,
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

  const handleSend = (text:string) => {
    console.log(text)
    messages.push({
      sender: "self",
      createdTime: "11:11",
      text: text,
      avatar: "images/chat-icon/bot-text-icon.jpeg",
    })
    setMessages(messages)
    setLoading(true)
    console.log(messages)
  }

  useEffect(() => {
if(loading) {
  setLoading(false)
}
  },[loading])

  return (
    <div className="h-[88vh]">
      <div className="overflow-auto max-h-[80vh] no-scrollbar py-4">
        {messages.map((sms: any, index: number) => 
          ( <ChatText message={sms} key={index} />)
        )}
       
        
      </div>
      <div>
        <FieldMessage sendMesage={handleSend}/>
      </div>
    </div>
  );
};

export default Chat;
