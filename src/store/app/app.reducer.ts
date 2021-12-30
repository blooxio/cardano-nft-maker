import { createSlice } from "@reduxjs/toolkit"
import { appInitialState } from "./app.props"

const appSlice = createSlice({
  name: "app",
  reducers: {},
  initialState: appInitialState
})

export const appReducer = appSlice.reducer
