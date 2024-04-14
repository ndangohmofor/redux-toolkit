import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
  const dispatch = useDispatch();
  const numOfIcecreams = useSelector((state) => state.iceCream.numOfIcecreams);
  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice creams</button>
      <button onClick={() => dispatch(restocked(10))}>
        Restock ice creams
      </button>
    </div>
  );
};

export default IcecreamView;
