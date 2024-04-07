const redux = require("redux");

const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    quantity: qty,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    quantity: qty,
  };
}

const initialState = { numOfCakes: 10 };

// (previousState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.quantity,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.quantity,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3));
unsubscribe();
