import React from "react";
import AppContainer from "./AppContainer";
import { createStore, applyMiddleware } from "redux";
import createSocketIoMiddleware from "redux-socket.io";
import io from "socket.io-client";
import { Provider } from "react-redux";

const socket = io("http://192.168.10.194:3001");
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

function reducer(state = {}, action) {
  switch (action.type) {
    case "message":
      return { ...state, message: action.data };
    case "users_online":
      return { ...state, usersOnline: action.data };
    default:
      return state;
  }
}

const store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);

store.subscribe(() => {
  console.log("new state", store.getState());
});

store.dispatch({ type: "server/hello", data: "hello!" });

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
