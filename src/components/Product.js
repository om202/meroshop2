import React, { useState } from "react";
import numeral from "numeral";

export const Product = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-64 w-64 rounded-md shadow-md bg-white p-4 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center">
        <img className="h-48" src={product.image} alt={product.title} />
      </div>
      <div className="text-base mb-2 mt-4">{product.title}</div>
      <div>Rs. {numeral(product.price * 120).format("0,0")}</div>
      {isHovered && (
        <div className="bg-slate-100 flex absolute bottom-0 p-4 right-0 w-full justify-center">
          <button className=" bg-emerald-500 text-white rounded px-2 py-1">
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};
