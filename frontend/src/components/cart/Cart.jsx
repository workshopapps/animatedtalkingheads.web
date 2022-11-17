import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { addItem, deleteItem } from "../../store/actions/cartAction";

function Cart() {
  const stateValue = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Number of items in Cart: {stateValue.numOfItems}</h2>
      <button
        onClick={() => {
          dispatch(addItem());
        }}
        type="submit"
        className="green"
      >
        Add Item to Cart
      </button>
      <button
        disabled={!(stateValue.numOfItems > 0)}
        onClick={() => {
          dispatch(deleteItem());
        }}
        type="submit"
        className="red"
      >
        Remove Item from Cart
      </button>
    </div>
  );
}

export default Cart;
