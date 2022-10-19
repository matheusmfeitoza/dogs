import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { photo } from "./photo";

const reducer = combineReducers({ photo });
const middleware = [...getDefaultMiddleware()];
export const store = configureStore({ reducer, middleware });
