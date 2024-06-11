"use client";
import axios from "axios";

export const useOpenAi = () => {
  const openAIKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  if (!openAIKey) {
    throw new Error("OPENAI_API_KEY not define");
  }

  // model text-to-text
  const textToText = async (text: string) => {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo-0125", // 2e / 1M token
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

  const textToImage = async (text: string) => {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      {
        model: "dall-e-2",
        prompt: text,
        n: 1,
        size: "256x256",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openAIKey}`,
        },
      }
    );
    return response.data.data[0].url;
  };

  return { textToText, textToImage };
};
