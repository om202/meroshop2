import React, { useState } from "react";
import { AddProduct } from "./AddProduct";
import { EditProduct } from "./EditProduct";
import { RemoveProduct } from "./RemoveProduct";

export const Admin = () => {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isRemoveFormOpen, setIsRemoveFormOpen] = useState(false);

  return (
    <div class="pt-24 h-full p-4 max-w-screen-xl w-screen mx-auto">
      <h1 className="text-2xl">Admin Dashboard</h1>

      <div className="flex flex-col gap-4 mt-8">
        <button
          onClick={() => setIsAddFormOpen(!isAddFormOpen)}
          className="bg-slate-200 p-2 max-w-[16rem] rounded-md hover:bg-slate-300 flex gap-1 justify-center items-center"
        >
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add Product
        </button>
        {isAddFormOpen && <AddProduct />}

        <button
          onClick={() => setIsEditFormOpen(!isEditFormOpen)}
          className="bg-slate-200 p-2 max-w-[16rem] rounded-md hover:bg-slate-300 flex gap-1 justify-center items-center"
        >
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
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          Edit Product
        </button>
        {isEditFormOpen && <EditProduct />}

        <button
          onClick={() => setIsRemoveFormOpen(!isRemoveFormOpen)}
          className="bg-slate-200 p-2 max-w-[16rem] rounded-md hover:bg-slate-300 flex gap-1 justify-center items-center"
        >
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
          Delete Product
        </button>
        {isRemoveFormOpen && <RemoveProduct />}
      </div>
    </div>
  );
};
