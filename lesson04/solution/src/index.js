import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Places from "./Places";
import AddForm from "./AddForm";
import data from "./data";
import ThemeContext from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import PlaceDetail from "./PlaceDetail";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import logger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <Provider store={store}>
      <Router>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <ThemeSwitcher />
          <Switch>
            <Route path="/place/:id">
              <PlaceDetail />
            </Route>
            <Route path="/">
              <h1>Places</h1>
              <Places />
              <AddForm />
            </Route>
          </Switch>
        </ThemeContext.Provider>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
