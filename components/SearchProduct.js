import React from "react";

const SearchProduct = ({loading,dropDownEdit,setDropdown,dropdown}) => {
  return (
    <>
      <div className="container mx-auto bg-red-50">
        <h1 className="text-3xl font-bold text-center pt-3 mb-4">
          Search Product
        </h1>

        {/* Search input and dropdown */}
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            id="searchInput"
            name="searchInput"
            className="border border-gray-300 p-2 w-full"
            placeholder="Enter search query"
            onChange={dropDownEdit}
            onBlur={() => {
              setDropdown([]);
            }}
            // value={dropdown.slug}
            // Add state and event handlers for search input
          />

          <select
            id="dropdown"
            name="dropdown"
            className="border border-gray-300 p-2"
            // Add state and event handlers for dropdown selection
          >
            <option value="">Filter</option>
            {/* {dropdownOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))} */}
          </select>
        </div>

        {loading && (
          <div className="flex justify-center items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
            >
              <circle
                cx="50"
                cy="50"
                fill="none"
                stroke="#0074d9"
                strokeWidth="10"
                r="35"
                strokeDasharray="164.93361431346415 56.97787143782138"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  values="0 50 50;360 50 50"
                ></animateTransform>
              </circle>
            </svg>
          </div>
        )}

        <div className="drop-container absolute bg-fuchsia-50 w-[70vw]">
          {dropdown.map((item, index) => (
            <div
              className="container px-10 my-2 flex justify-between "
              key={index}
              value={item}
            >
              <span className="text-center">{item.slug} </span>
              <span className="text-center">{item.quantity}</span>
              <span className="text-center">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchProduct;
