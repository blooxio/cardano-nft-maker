import React from "react"
import { Provider } from "react-redux"
import { createStore } from "./store/create-store"
import { Router } from "./router/Router"

const store = createStore()

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
