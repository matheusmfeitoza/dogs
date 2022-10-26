import { PHOTOS_GET } from "../api";
import { createAsyncSlice } from "./helper/createAsyncSlice";

const slice = createAsyncSlice({
  name: "feed",
  initialState: {
    list: [],
    pages: 1,
    isInfinity: true,
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload);
      if (action.payload.length === 0) state.isInfinity = false;
    },
    addPages(state) {
      state.pages++;
    },
    resetState(state) {
      state.list = [];
      state.pages = 1;
      state.isInfinity = true;
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  fetchData: ({ total, user, page }) => PHOTOS_GET({ total, page, user }),
});
export const { addPhotos, addPages, resetState: resetFeed } = slice.actions;
export const feed = slice.reducer;
const fetchFeed = slice.fetchAsyncData;

export const loadMorePhotos =
  ({ total = 6, user }) =>
  async (dispatch, getState) => {
    const { feed } = getState();
    dispatch(addPages());
    const { payload } = await dispatch(
      fetchFeed({ total, user, page: feed.pages })
    );
    dispatch(addPhotos(payload));
  };
