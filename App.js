import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, combineReducers } from "redux";
import AppNav from "./Navigator/AppNavigator";
import ReduxThunk from "redux-thunk";
import AppReducer from "./source/Component/Redux/reducer";

const reducers = combineReducers({
  book: AppReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

const fontLoading = () => {
  return Font.loadAsync({});
};
export default function App() {
  const [fontLoad, setFontLoad] = useState(false);

  if (!fontLoad) {
    return (
      <AppLoading
        startAsync={fontLoading}
        onFinish={() => setFontLoad(true)}
        onError={(test) => console.log(test)}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
}
