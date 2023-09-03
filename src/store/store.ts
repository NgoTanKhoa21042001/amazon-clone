import { configureStore } from "@reduxjs/toolkit";
import nextReducer from "./nextSlice";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
// Dòng code đầu tiên sử dụng hàm persistReducer() để tạo một reducer mới. Reducer mới này sẽ lưu trữ trạng thái của store trong một kho lưu trữ bên ngoài.
const persistedReducer = persistReducer(persistConfig, nextReducer);
export const store = configureStore({
  // Reducer là một hàm được sử dụng để cập nhật state của store
  reducer: { next: persistedReducer },
  // Middleware là một hàm được sử dụng để xử lý các action trước khi chúng được dispatch đến reducer.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck là một tùy chọn cho phép bạn chỉ định các action nào sẽ được lưu trữ trong kho lưu trữ bên ngoà
      serializableCheck: {
        // Trong trường hợp này, các action FLUSH,...  sẽ không được lưu trữ.
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
// RootState là type của state của store.
// AppDispatch là type của hàm dispatch của store.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
