import React from "react";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/index";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import UIContainer from "./ui";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UIContainer></UIContainer>
      </Provider>
    </div>
  );
}

export default App;
