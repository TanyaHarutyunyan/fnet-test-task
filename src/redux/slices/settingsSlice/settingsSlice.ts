import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LanguageType } from "../../../types";

export interface SettingsState {
  language: LanguageType;
}

const initialState: SettingsState = {
  language: "en",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageType>) => {
      state.language = action.payload;
    },
  },
});

export default settingsSlice.reducer;
