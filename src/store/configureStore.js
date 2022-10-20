import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { photo } from "./photo";
import { token } from "./token";
import { user } from "./user";

const reducer = combineReducers({ photo, user, token });
const middleware = [...getDefaultMiddleware()];
export const store = configureStore({ reducer, middleware });
