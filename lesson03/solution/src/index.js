import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Places from "./Places";
import AddForm from "./AddForm";
import ThemeContext from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import PlaceDetail from "./PlaceDetail";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
