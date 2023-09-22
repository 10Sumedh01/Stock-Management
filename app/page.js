"use client";
import AddProduct from "@/components/AddProduct";
import DisplayStocks from "@/components/DisplayStocks";
import Header from "@/components/Header";
import SearchProduct from "@/components/SearchProduct";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  // Sample data for stocks (replace this with your actual data)
  const [stocks, setStocks] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [query, setQuery] = useState("");
  const [dropdown, setDropdown] = useState([
    {
      id: "",
      slug: "",
      quantity: "",
      price: "",
    },
  ]);

  useEffect(() => {
    const fetchdata = async () => {
      const respnose = await fetch("/api/product");
      let result = await respnose.json();
      // console.log(result.allProducts);
      setProducts(result.allProducts);
    };
    // console.log(products);
    return () => fetchdata();
  }, [stocks]);

  const addProduct = async (e) => {
    // Function to handle form submission for adding a product

    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stocks),
      });

      if (response.ok) {
        // Product added successfully, you can handle this as needed
        console.log("Product added successfully!");
        // Clear the form fields or update state as needed
        setStocks({
          slug: " ",
          quantity: "",
          price: "",
        });
        successToast();
        // setStocks([])
      } else {
        // Handle errors if the request fails
        console.error("Failed to add product.");
        failToast();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setStocks({ ...stocks, [e.target.name]: e.target.value });
    // console.log(stocks)
  };

  const dropDownEdit = async (e) => {
    let val = e.target.value;
    setQuery(val);
    if (val.length > 0) {
      setloading(true);
      setDropdown([]);
      const respnose = await fetch("/api/search?query=" + query);
      let result = await respnose.json();
      // console.log(result.allProducts);
      setDropdown(result.allProducts);
      setloading(false);
    }
    else{
      setDropdown([])
    }
  };

  const successToast = () => {
    toast.success("Product Added Successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const failToast = () => {
    toast.error("Something Went Wrong!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <Header />

        {/* Search input and dropdown */}
      <SearchProduct dropdown={dropdown} setDropdown={setDropdown} loading={loading} dropDownEdit={dropDownEdit}/>

      {/* Form for adding a new product */}
      <AddProduct stocks={stocks} handleChange={handleChange} addProduct={addProduct} />
     
      {/* Table to display stocks */}
      <DisplayStocks products={products}/>
    </>
  );
}
