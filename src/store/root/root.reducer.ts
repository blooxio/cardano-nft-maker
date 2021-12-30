import { combineReducers } from "@reduxjs/toolkit"
import { AppReducer } from "../app/app.props"
import { appReducer } from "../app/app.reducer"

export interface RootReducer {
  app: AppReducer
}

export const rootReducer = combineReducers({
  app: appReducer,
})
