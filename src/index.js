import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootStore from "./reducers";
import ShowPost from "./components/ShowPost";
import AddPostDialog from "./components/AddPostDialog";
import "./reset.css";
import "./components/ShowPost/style.css";

const store = createStore(
  rootStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AddPostDialog />
      <ShowPost />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
