import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./root/root.reducer"

export const createStore = () => {
  return configureStore({ reducer: rootReducer })
}
