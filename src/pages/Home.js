import React, { useEffect, useState } from "react";
import { Product } from "../components/Product";
import { Banner } from "../components/Banner";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div class="bg-gray-50 pt-16 h-full p-4">
      <Banner />
      <h1 class="text-3xl font-bold text-gray-900 mb-8 mt-8">Products</h1>
      <div className="flex flex-wrap gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
