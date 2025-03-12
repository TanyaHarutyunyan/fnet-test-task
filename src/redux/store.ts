import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/userSlice/usersSlice";
import { persistStore, persistReducer } from "redux-persist";
import settingsReducer from "./slices/settingsSlice/settingsSlice";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  users: usersReducer,
  settings: settingsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
