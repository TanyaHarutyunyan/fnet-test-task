import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FormDataType } from "../../../types";

interface UsersState {
  users: FormDataType[];
}

const initialState: UsersState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<FormDataType>) => {
      state.users.push(action.payload);
    },
  },
});

export default usersSlice.reducer;
