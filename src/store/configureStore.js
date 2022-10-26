import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { photo } from "./photo";
import { token } from "./token";
import { user } from "./user";
import { feed } from "./feed";
import {ui} from './ui'
import {photoPhost} from "./photoPhost";

const reducer = combineReducers({ photo, user, token, feed,ui, photoPhost });
const middleware = [...getDefaultMiddleware()];
export const store = configureStore({ reducer, middleware });
