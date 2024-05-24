import {
  addFirebaseData,
  deleteFirebaseData,
  getFirebaseData,
} from "@/api/firebaseAPI";
import { useQuery } from "@tanstack/react-query";
import { Timestamp } from "firebase/firestore";

export const useFirebase = () => {
  const fetchSMS = async () => {
    const response = await getFirebaseData("ChatBot", "Text-to-Text", "OpenAI");
    console.log(response);
    return response;
  };

  const queryFirebase = useQuery({
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
    queryFirebase.refetch();
  };

  const deleteMessage = async (deleteId: string) => {
    await deleteFirebaseData("ChatBot", "Text-to-Text", "OpenAI", deleteId);
    queryFirebase.refetch();
  };

  return { queryFirebase, addMessage, deleteMessage };
};
