import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { photo } from "./photo";
import { token } from "./token";
import { user } from "./user";
import { feed } from "./feed";

const reducer = combineReducers({ photo, user, token, feed });
const middleware = [...getDefaultMiddleware()];
export const store = configureStore({ reducer, middleware });
