import { GET_USER } from "../api";
import { createAsyncSlice } from "./helper/createAsyncSlice";
import { fetchToken } from "./token";

const slice = createAsyncSlice({
  name: "user",
  fetchData: (token) => GET_USER(token),
});
export const fetchUser = slice.fetchAsyncData;

export const userLogin = (user) => async (dispatch) => {
  const { payload } = await dispatch(fetchToken(user));
  if (payload) await dispatch(fetchUser(payload.token));
};

export const user = slice.reducer;
