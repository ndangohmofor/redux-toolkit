const CAKE_ORDERED = "CAKE_ORDERED";

function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
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
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
