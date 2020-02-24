// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
import { createStore, combineReducers } from "redux";

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action"
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "Second Redux Action"
  };
}

const initialCakeState = {
  numOfCakes: 10
};
const initialIceCreamState = {
  numOfIceCreams: 20
};
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});
const store = createStore(rootReducer);
console.log("Initial State", store.getState());
store.subscribe(() => console.log("Updated State", store.getState()));
store.dispatch(buyCake());

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

