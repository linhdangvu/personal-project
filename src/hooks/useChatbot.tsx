import {
  addFirebaseData,
  deleteFirebaseData,
  getFirebaseData,
} from "@/api/firebase";
import { useOpenAi } from "@/api/openai";
import { useQuery } from "@tanstack/react-query";
import { Timestamp } from "firebase/firestore";

export const useChatbot = () => {
  const openai = useOpenAi();

  const fetchSMS = async () => {
    const response = await getFirebaseData("ChatBot", "Models", "OpenAI");
    return response;
  };

  const queryChatbot = useQuery({
    queryKey: ["sms"],
    queryFn: fetchSMS,
  });

  const addMessage = async (txt: string, model: string) => {
    await addFirebaseData(
      "ChatBot",
      {
        type: "text",
        sender: "self",
        createdTime: Timestamp.fromDate(new Date()),
        text: txt,
        avatar: "images/chat-icon/anonymous-icon.png",
      },
      "Models",
      "OpenAI"
    );
    queryChatbot.refetch();

    // sent to OpenAI
    try {
      // Text-to-Text
      if (model === "Text-to-Text") {
        console.log("Text-to-Text");
        const result_openai = await openai.textToText(txt);
        await addFirebaseData(
          "ChatBot",
          {
            type: "text",
            sender: "openai",
            createdTime: Timestamp.fromDate(new Date()),
            text: result_openai,
            avatar: "images/chat-icon/text-icon.png",
          },
          "Models",
          "OpenAI"
        );
      } else if (model === "Text-to-Image") {
        console.log("Text-to-Image");
        const result_openai = await openai.textToImage(txt);
        await addFirebaseData(
          "ChatBot",
          {
            type: "image",
            sender: "openai",
            createdTime: Timestamp.fromDate(new Date()),
            text: txt,
            image: result_openai,
            avatar: "images/chat-icon/image-icon.png",
          },
          "Models",
          "OpenAI"
        );
      }

      queryChatbot.refetch();
    } catch (e: any) {
      console.error(e);
    }
  };

  const addImage = (text: string, image: string) => {
    console.log("add image");
  };

  const deleteMessage = async (deleteId: string) => {
    await deleteFirebaseData("ChatBot", "Models", "OpenAI", deleteId);
    queryChatbot.refetch();
  };

  return { queryChatbot, addMessage, deleteMessage, addImage };
};
