import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  user: {
    full_name: "",
  },
};

const UserSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const User = UserSlice.reducer;
export const { addUser } = UserSlice.actions;