import {createAsyncSlice} from "./helper/createAsyncSlice";
import {PHOTO_POST} from "../api";

const slice = createAsyncSlice({
    name: 'photoPhost',
    fetchData: ({formData,token}) => PHOTO_POST({formData,token})
})

export const photoPhost = slice.reducer;
export const fetchPhotoPost = slice.fetchAsyncData;