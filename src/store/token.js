import { TOKEN_USER } from "../api";
import { createAsyncSlice } from "./helper/createAsyncSlice";

const slice = createAsyncSlice({
  name: "token",
  fetchData: (user) => TOKEN_USER(user),
});

export const fetchToken = slice.fetchAsyncData;
export const token = slice.reducer;
