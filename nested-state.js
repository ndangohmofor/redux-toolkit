const { createStore, applyMiddleware } = require("redux");
const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();
const produce = require("immer").produce;

const initialState = {
  name: "Mofor",
  address: {
    street: "123 Main St",
    city: "Columbus",
    state: "OH",
  },
};

const STREET_UPDATED = "STREET_UPDATED";
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(logger));
console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(updateStreet("456 Main St"));
unsubscribe();
