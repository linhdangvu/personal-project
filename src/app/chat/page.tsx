"use client";

import { addFirebaseData } from "@/api/firebaseAPI";
import FieldMessage from "@/composants/app/chat/field-message";
import ChatText from "@/composants/app/chat/text";
import { useFirebase } from "@/hooks/useFirebase";
import { useQuery } from "@tanstack/react-query";
import { Timestamp } from "firebase/firestore";
import React, { useState } from "react";

const Chat = () => {
  const firebaseApi = useFirebase();

  const handleSend = async (text: string) => {
    //send to Firestore
    await firebaseApi.addMessage(text);
  };

  const handleDelete = () => {
    // firebaseApi.queryFirebase.refetch();
  };

  if (firebaseApi.queryFirebase.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (firebaseApi.queryFirebase.isError) {
    return <h1>Error...</h1>;
  }

  return (
    <div className="h-[88vh]">
      {/* <h1>{books.title}</h1> */}
      <div className="overflow-auto max-h-[80vh] no-scrollbar py-4">
        {firebaseApi.queryFirebase.data &&
          firebaseApi.queryFirebase.data.map((m: any, index: number) => (
            <ChatText message={m} key={index} updateDelete={handleDelete} />
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
