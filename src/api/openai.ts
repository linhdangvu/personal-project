"use client";
import OpenAI from "openai";

const openAIKey = process.env.OPENAI_API_KEY;

if (!openAIKey) {
  throw new Error("OPENAI_API_KEY not define");
}

export const openai = new OpenAI({
  apiKey: openAIKey,
});
