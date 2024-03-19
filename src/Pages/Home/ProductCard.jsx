/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import { GoEye } from "react-icons/go";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { brand, photo, _id } = product || {};

  return (
    <div className="relative group transition">
      <div className="border cursor-pointer hover:border-none">
        <div className="group transition">
          <img
            src={photo}
            className="h-[250px] w-full group-hover:scale-110 duration-300"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-center text-2xl font-bold py-4">{brand}</h1>
        </div>
      </div>

      <div className="absolute top-2 -right-10 group-hover:right-2 p-2 opacity-0 group-hover:opacity-80 transition-all duration-300 drop-shadow-xl">
        <Link to={`/brands-products/${_id}`}>
          <button>
            <div className="flex justify-center items-center bg-white px-2 py-2">
              <GoEye className="text-3xl" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
