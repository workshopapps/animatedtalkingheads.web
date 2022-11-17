import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { addItem, deleteItem } from "../../store/actions/cartAction";

function Cart() {
  const stateValue = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Number of items in Cart: {"4"}</h2>
      <div className="fade-in w-full bg-red-100 h-40  ">
        <div className="spinner">
          <div className="spinner-roller two">
            <div className="two"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
