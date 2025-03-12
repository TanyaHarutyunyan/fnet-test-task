import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SettingsState {
  language: string;
}

const initialState: SettingsState = {
  language: "en",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.language = action.payload;
    },
  },
});

export default settingsSlice.reducer;
