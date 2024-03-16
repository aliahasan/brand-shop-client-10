/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  
  const { name, brand, type, price, photo, rating, _id } = product || {};

  return (
    <Link to={`/brands-products/${_id}`}>
      <div className="border cursor-pointer">
        <img src={photo} className="h-[250px] w-full" alt="" />

        <h1 className="text-center text-2xl font-bold py-4">{brand}</h1>
      </div>
    </Link>
  );
};

export default ProductCard;
