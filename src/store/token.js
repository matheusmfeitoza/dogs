import { TOKEN_USER } from "../api";
import { createAsyncSlice } from "./helper/createAsyncSlice";

const slice = createAsyncSlice({
  name: "token",
  initialState: {
    data: {
      token: window.localStorage.getItem("token"),
    },
  },
  fetchData: (user) => TOKEN_USER(user),
});
export const { resetState: tokenLogout } = slice.actions;

export const fetchToken = slice.fetchAsyncData;
export const token = slice.reducer;
