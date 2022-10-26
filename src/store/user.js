import { GET_USER } from "../api";
import { createAsyncSlice } from "./helper/createAsyncSlice";
import { fetchToken, tokenLogout } from "./token";

const slice = createAsyncSlice({
  name: "user",
  fetchData: (token) => GET_USER(token),
});
export const fetchUser = slice.fetchAsyncData;
const { resetState: userLogout } = slice.actions;

export const userLogin = (user) => async (dispatch) => {
  const { payload } = await dispatch(fetchToken(user));
  if (payload) {
    window.localStorage.setItem("token", payload.token);
    await dispatch(fetchUser(payload.token));
  }
};

export const logoutUser = () => async (dispatch) => {
  await dispatch(userLogout());
  await dispatch(tokenLogout());
  window.localStorage.removeItem("token");
};

export const autoLogin = () => async (dispatch, getState) => {
  const { token } = getState();
  if (token?.data?.token) await dispatch(fetchUser(token.data.token));
};

export const user = slice.reducer;
