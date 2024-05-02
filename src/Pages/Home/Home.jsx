import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Companents/Header/Header";
import Sectiontwo from "../../Companents/Sectiontwo/Sectiontwo";
import Sectionthree from "../../Companents/Sectionthree/Sectionthree";
import Sectionone from "../../Companents/Sectionone/Sectionone";
import ProductCard from "../../Companents/ProductCard/ProductCard";


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const addToCart = (productId) => {
    console.log("ID", productId, "sepete eklendi.");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = [...cart, productId];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <Header />
      <Sectiontwo />
      <Sectionthree />
      <Sectionone />
      <div 
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "70px",
        }}
      >
        {products.map((item) => (
          <ProductCard item={item} onClick={() => addToCart(item)} />
        ))}
      </div>
    </div>
  );
};

export default Home;
