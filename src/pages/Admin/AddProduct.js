import { useState } from "react";

export const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description: desc,
        price,
        image,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.error("Error:", data.error);
          alert(`Error: ${data.error}`);
        } else {
          console.log("Product saved successfully");
          setPrice("");
          setTitle("");
          setDesc("");
          setImage(null);
          alert("Product saved successfully");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };


  return (
    <div className="bg-slate-50 p-5 rounded-lg border">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label className="flex flex-col">
          Title:
          <input
            type="text"
            placeholder="Amazing Product"
            className="border border-gray-300 p-2 mt-2 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col">
          Price:
          <input
            type="number"
            className="border border-gray-300 p-2 mt-2 rounded-md"
            value={price}
            placeholder="100"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col">
          Description:
          <textarea
            className="border border-gray-300 p-2 mt-2 rounded-md"
            value={desc}
            placeholder="This is a product description."
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col">
          Image URL:
          <input
            type="url"
            value={image}
            placeholder="https://example.com/image.jpg"
            onChange={(e) => setImage(e.target.value)}
            className="border border-gray-300 p-2 mt-2 rounded-md"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-emerald-500 text-white p-2 mt-4 rounded-md hover:bg-emerald-600 max-w-36"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};