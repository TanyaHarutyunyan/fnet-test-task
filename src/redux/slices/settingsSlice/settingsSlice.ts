import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LanguageType } from "../../../types";

interface SettingsState {
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
      state.language = action.payload;
    },
  },
});

export default settingsSlice.reducer;
