import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "mentorai", name: "MentorAI",
  credentials:{
    gemini: {
      apikey: process.env.GEMINI_API_KEY,
    },
  }

 });
