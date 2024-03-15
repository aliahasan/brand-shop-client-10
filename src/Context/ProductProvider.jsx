/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);



  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
