import { selector } from "recoil";
import api from "../../api/api";

export const getMessage = selector({
  key: "getMessage",
  get: async () => {
    return await api.getMessage();
  },
});
