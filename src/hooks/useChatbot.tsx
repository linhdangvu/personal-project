import {
  addFirebaseData,
  deleteFirebaseData,
  getFirebaseData,
} from "@/api/firebaseAPI";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Timestamp } from "firebase/firestore";

const openAIKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
if (!openAIKey) {
  throw new Error("OPENAI_API_KEY not define");
}

export const useChatbot = () => {
  const fetchSMS = async () => {
    const response = await getFirebaseData("ChatBot", "Text-to-Text", "OpenAI");
    console.log(response);
    return response;
  };

  const queryChatbot = useQuery({
    queryKey: ["sms"],
    queryFn: fetchSMS,
  });

  const sendOpenAi = async (text: string) => {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "babbage-002",
        messages: [{ role: "user", content: text }],
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openAIKey}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  };

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
      const result_openai = await sendOpenAi(text);
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
