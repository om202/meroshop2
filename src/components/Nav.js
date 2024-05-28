import React from "react";
import { GlobalStateContext } from "../State";

export const Nav = () => {
  const [state, _] = React.useContext(GlobalStateContext);
  const { user, cart } = state;
  const items_in_cart = cart.length;

  return (
    <nav className="bg-slate-600 w-full p-3 pr-8 pl-8 fixed shadow-sm z-50">
      <div className="flex max-w-screen-lg mx-auto justify-between items-center text-emerald-100">
        <a href="/">
          <div className="flex flex-row text-center gap-3 items-center cursor-pointer">
            <img
              className="w-11"
              src="mero-shop-logo.png"
              alt="mero shop logo"
            />
            <span className="text-xl">Mero Shop</span>
          </div>
        </a>
        <div>
          <ul className="flex space-x-6">
            <li className="cursor-pointer">
              {user ? (
                <span>{user}</span>
              ) : (
                <a href="/login">
                  <div className="flex gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <span>Sign In</span>
                  </div>
                </a>
              )}
            </li>
            <li className="cursor-pointer">
              <a href="/cart">
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  <span>Cart</span>
                  <span className="bg-emerald-500 text-emerald-100 rounded-full p-1 w-6 h-6 flex items-center text-center justify-center">
                    {items_in_cart}
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
