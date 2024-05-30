import React, { useEffect, useState } from "react";
import { Product } from "../components/Product";
import { Banner } from "../components/Banner";
import { GlobalStateContext } from "../State";

export const Home = () => {
  const [state, setState] = React.useContext(GlobalStateContext);
  const setProducts = (products) => {
    setState((state) => ({ ...state, products }));
  };
  const { products } = state;

  console.log("products", products.length);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        localStorage.setItem("products", JSON.stringify(data));
      });
  }, []);

  return (
    <div class="pt-16 h-full p-4">
      <Banner />
      <h1 class="text-3xl font-bold text-gray-900 mb-8 mt-8">Products</h1>
      <div className="flex flex-wrap gap-6">
        {products.length !== 0 ? (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <div className="text-slate-400 flex flex-col gap-8">
            <p className="text-2xl flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                />
              </svg>
              NO PRODUCTS IN THE STORE
            </p>
            <p>PLEASE ASK YOUR ADMIN TO ADD NEW PRODUCTS</p>
          </div>
        )}
      </div>
    </div>
  );
};
