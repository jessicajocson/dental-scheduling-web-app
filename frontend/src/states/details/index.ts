import { combineReducers } from "@reduxjs/toolkit";
import { User } from "./user.slice";
import { Token } from "./token.slice";
import { Services } from "./services.slice";

export const appSlice = combineReducers({
  User,
  Token,
  Services
});