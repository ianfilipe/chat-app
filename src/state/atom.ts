import { atom } from "recoil";
import api from "../api/api";
import { getMessage } from "./selectors";

export const chatState = atom({
  key: "chatState",
  default: getMessage,
});
