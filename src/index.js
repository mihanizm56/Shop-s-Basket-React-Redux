import React from "react"
import ReactDOM from "react-dom"
import App from "./containers/App/index"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './Store/'
import './fonts/fonts.css'
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
