const CAKE_ORDERED = "CAKE_ORDERED";

function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    quantity: qty,
  };
}
