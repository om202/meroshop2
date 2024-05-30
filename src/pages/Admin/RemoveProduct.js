import { useState, useEffect } from "react";

export const RemoveProduct = () => {
  const [id, setId] = useState("");
  const [idList, setIdList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/delete-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.error("Error:", data.error);
          alert(`Error: ${data.error}`);
        } else {
          console.log("Product saved successfully");
          alert("Product Deleted successfully");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const fetchProductIds = async () => {
    const response = await fetch("http://localhost:3001/product-id-list");
    const data = await response.json();
    setIdList(data);
  };

  useEffect(() => {
    fetchProductIds();
  }, []);

  return (
    <div className="bg-slate-50 p-5 rounded-lg border">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label className="flex flex-col">
          Product ID:
          <select
            className="border border-gray-300 p-2 mt-2 rounded-md"
            onChange={(e) => setId(e.target.value)}
            required
          >
            <option value="">Select a product</option>
            {idList.map((id) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
          </select>
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