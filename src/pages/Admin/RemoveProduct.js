import { useState } from "react";

export const RemoveProduct = () => {
  const [id, setId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <button
          type="submit"
          className="bg-red-500 text-white p-2 mt-4 rounded-md hover:bg-red-600 max-w-36"
        >
          Remove Product
        </button>
      </form>
    </div>
  );
};