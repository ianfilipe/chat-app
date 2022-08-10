import { atom } from "recoil";

export const chatState = atom({
  key: "chatState",
  default: [
    {
      id: 1,
      userName: "ianFss",
      userMessage: "Oi!",
    },
    {
      id: 2,
      userName: "gambito",
      userMessage: "Olá!",
    },
  ],
});
