import React from "react";

const DisplayStocks = ({products}) => {
  return (
    <>
      <div className="container mx-auto bg-red-50">
        <h1 className="text-3xl text-center mb-5 pt-2 font-bold">
          Display Current Stock
        </h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              {/* <th className='border border-gray-300 p-2'>ID</th> */}
              <th className="border border-gray-300 p-2">Product Name</th>
              <th className="border border-gray-300 p-2">Quantity</th>
              <th className="border border-gray-300 p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((e) => {
              return (
                <tr key={e.slug}>
                  <td className="border text-center border-gray-300 p-2">
                    {e.slug}
                  </td>
                  <td className="border text-center border-gray-300 p-2">
                    {e.quantity}
                  </td>
                  <td className="border text-center border-gray-300 p-2">
                    ₹{e.price}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DisplayStocks;
