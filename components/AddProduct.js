import React from "react";
import { ToastContainer } from "react-toastify";

const AddProduct = ({stocks,handleChange,addProduct}) => {
  return (
    <>
      <div className="container pl-3 mx-auto bg-red-50">
        <h1 className="text-3xl font-bold text-center pt-3">Add new Product</h1>

        <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
          <label className="block mb-2" htmlFor="productName">
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            name="slug"
            className="border border-gray-300 p-2 w-full"
            placeholder="Enter product name"
            onChange={handleChange}
            value={stocks.slug}
            // Add state and event handlers for form input values
          />

          <label className="block mt-2 mb-2" htmlFor="quantity">
            Quantity:
          </label>
          <input
            name="quantity"
            type="number"
            id="quantity"
            className="border border-gray-300 p-2 w-full"
            placeholder="Enter quantity"
            onChange={handleChange}
            value={stocks.quantity}
            // Add state and event handlers for form input values
          />

          <label className="block mt-2 mb-2" htmlFor="price">
            Price:
          </label>
          <input
            name="price"
            type="number"
            id="price"
            // step='0.01'
            className="border border-gray-300 p-2 w-full"
            placeholder="Enter price"
            onChange={handleChange}
            value={stocks.price}
            // Add state and event handlers for form input values
          />

          <button
            onClick={addProduct}
            type="submit"
            className="bg-purple-500 rounded-lg text-white px-4 py-2  my-4"
          >
            Add Product
          </button>

          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </form>
      </div>
    </>
  );
};

export default AddProduct;
