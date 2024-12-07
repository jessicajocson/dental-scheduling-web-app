import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  token: "",
};

const TokenSlice = createSlice({
  name: "TOKEN",
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const Token = TokenSlice.reducer;
export const { addToken } = TokenSlice.actions;