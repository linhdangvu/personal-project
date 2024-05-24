"use client";
import axios from "axios";
import OpenAI from "openai";

const openAIKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const openAIUserId = process.env.NEXT_PUBLIC_OPENAI_USER_ID

if (!openAIKey) {
  throw new Error("OPENAI_API_KEY not define");
}

if (!openAIUserId) {
  throw new Error("OPENAI_API_KEY not define");
}




