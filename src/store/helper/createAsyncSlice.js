import { createSlice } from "@reduxjs/toolkit";

/**
 *
 * @param {object} config
 * @param {string} config.name
 * @param {object} config.initialState
 * @param {object} config.reducers
 * @param {Function} config.fetchData
 * @returns
 */

export const createAsyncSlice = (config) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false,
      data: null,
      error: null,
      ...config.initialState,
    },
    reducers: {
      fetchStarted(state) {
        state.loading = true;
      },
      fetchSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      fetchError(state, action) {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      },
      resetState(state) {
        state.loading = false;
        state.data = null;
        state.error = null;
      },
      ...config.reducers,
    },
  });

  const { fetchError, fetchStarted, fetchSuccess, resetState } = slice.actions;

  const fetchAsyncData = (payload) => async (dispatch) => {
    try {
      dispatch(fetchStarted());
      const { url, options } = config.fetchData(payload);
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok === false) throw new Error(data.message);
      return dispatch(fetchSuccess(data));
    } catch (error) {
      return dispatch(fetchError(error.message));
    }
  };

  return { ...slice, fetchAsyncData, resetState };
};
