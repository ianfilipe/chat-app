import { atom } from "recoil";

export const chatState = atom({
  key: "chatState",
  default: {
    userName: "ianFss",
    userMessage: "Oi!",
  },
});
