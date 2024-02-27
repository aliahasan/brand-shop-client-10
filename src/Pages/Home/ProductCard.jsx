/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

/* eslint-disable no-unused-vars */
const ProductCard = ({ product }) => {
  const { name, brand, type, price, photo, rating, _id } = product || {};

  return (
    // <div>
    //   <div className="w-full h-[420px]  border border-[#e4e4e4] mb-4 relative overflow-hidden group transition">
    //     <div>
    //       <div className="w-full h-full flex justify-center items-center">
    //         <div>
    //           <img
    //             className="h-[250px] group-hover:scale-110 cursor-pointer duration-300 transition"
    //             src={photo}
    //             alt=""
    //           />
    //         </div>
    //       </div>

    //       <div className="absolute top-5 -right-11  group-hover:right-4 px-2 py-1 text-white flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
    //         <button>
    //           <div className="flex justify-center items-center text-white w-8 h-8 bg-red-500">
    //             <BsPlus className="text-3xl"></BsPlus>
    //           </div>
    //         </button>
    //         <Link
    //           to={`/`}
    //           className="w-8 h-8 flex justify-center items-center bg-white text-primary drop-shadow-xl"
    //         >
    //           <BsEyeFill></BsEyeFill>
    //         </Link>
    //       </div>
    //     </div>
    //     <div>
    //       <div className="mt-6  text-center">
    //         <h1 className="text-xl font-bold">{brand}</h1>
    //         <Link>
    //           <h2 className="font-semibold mb-1">{name}</h2>
    //         </Link>
    //         <h2 className="text-sm capitalize text-gray-500 font-semibold">
    //           {type}
    //         </h2>
    //         <div>
    //           <h1 className="text-green-600 font-bold">$ {price}</h1>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Link to={`/brand-details/${_id}`}>
      <div className="border cursor-pointer">
        <img src={photo} className="h-[250px] w-full" alt="" />

        <h1 className="text-center text-2xl font-bold py-4">{brand}</h1>
      </div>
    </Link>
  );
};

export default ProductCard;
