import {createAsyncSlice} from "./helper/createAsyncSlice";

const slice = createAsyncSlice({
    name: "ui",
    initialState: {
        modal: false,
    },
    reducers: {
        openModal(state) {
            state.modal = true;
        },
        closeModal(state) {
            state.modal = false;
        },
    },
});

export const ui = slice.reducer;
export const {openModal, closeModal} = slice.actions;
