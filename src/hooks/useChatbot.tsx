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
    const response = await getFirebaseData("ChatBot", "Text-to-Text", "OpenAI");
    return response;
  };

  const queryChatbot = useQuery({
    queryKey: ["sms"],
    queryFn: fetchSMS,
  });

  const addMessage = async (text: string) => {
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
    queryChatbot.refetch();

    // sent to OpenAI
    try {
      const result_openai = await openai.textToText(text);
      await addFirebaseData(
        "ChatBot",
        {
          sender: "openai",
          createdTime: Timestamp.fromDate(new Date()),
          text: result_openai,
          avatar: "images/chat-icon/bot-text-icon.png",
        },
        "Text-to-Text",
        "OpenAI"
      );
      queryChatbot.refetch();
    } catch (e: any) {
      console.error(e);
    }
  };

  const deleteMessage = async (deleteId: string) => {
    await deleteFirebaseData("ChatBot", "Text-to-Text", "OpenAI", deleteId);
    queryChatbot.refetch();
  };

  return { queryChatbot, addMessage, deleteMessage };
};
