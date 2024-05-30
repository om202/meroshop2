import { useState } from "react";

export const EditProduct = () => {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="bg-slate-50 p-5 rounded-lg border">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label className="flex flex-col">
          Product ID:
          <input
            type="text"
            className="border border-gray-300 p-2 mt-2 rounded-md"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col">
          Name:
          <input
            type="text"
            className="border border-gray-300 p-2 mt-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col">
          Price:
          <input
            type="number"
            className="border border-gray-300 p-2 mt-2 rounded-md"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col">
          Description:
          <textarea
            className="border border-gray-300 p-2 mt-2 rounded-md"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col">
          Image:
          <input
            type="file"
            onChange={handleImageChange}
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