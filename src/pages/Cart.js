import React from "react";
import { GlobalStateContext } from "../State";
import numeral from "numeral";

export const Cart = () => {
  const [state, setState] = React.useContext(GlobalStateContext);
  const { cart, user } = state;
  const final_cart = cart
    .map((item) => {
      return {
        ...item,
        quantity: cart.filter((i) => i.id === item.id).length,
      };
    })
    .filter(
      (item, index, self) => self.findIndex((i) => i.id === item.id) === index
    );

  const handlePurchase = () => {
    if(!user) {
      alert("Please login to purchase");
      return;
    }
    alert("Purchase successful");
    setState((state) => ({ ...state, cart: [] }));
    localStorage.removeItem("cart");
  };

  return (
    <div class="pt-20 p-4">
      {final_cart.length === 0 ? (
        <div class="text-center">No items in the cart</div>
      ) : (
        <>
          <h1 className="mb-8 text-xl">Cart Summary</h1>

          <div class="flex flex-wrap gap-4">
            {final_cart.map((item) => (
              <div class="bg-white p-4 rounded-lg shadow-sm border flex gap-3 w-96">
                <div className="w-24 h-auto flex justify-center items-center">
                  <img src={item.image} alt={item.title} />
                </div>
                <div>
                  <div class="text-base mb-2 mt-4">{item.title}</div>
                  <div>Rs. {numeral(item.price).format("0,0")}</div>
                  <span>Quantity: {item.quantity}</span>
                </div>
              </div>
            ))}
          </div>

          <div class="mt-8">
            <div class="flex items-center gap-4">
              <span className="font-bold">Total:</span>
              <span>
                Rs.{" "}
                {numeral(
                  final_cart
                    .map((item) => item.price * item.quantity)
                    .reduce((a, b) => a + b, 0)
                ).format("0,0")}
              </span>
            </div>
          </div>

          <div class="mt-8">
            <button
              onClick={() => {
                setState((state) => ({ ...state, cart: [] }));
                localStorage.removeItem("cart");
              }}
              className="bg-orange-500 text-white rounded px-4 py-2"
            >
              Clear Cart
            </button>
            <button
              onClick={() => handlePurchase()}
              className="bg-emerald-500 text-white rounded px-4 py-2 ml-4"
            >
              Purchase Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};
