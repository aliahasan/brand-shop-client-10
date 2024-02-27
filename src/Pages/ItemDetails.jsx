import { Card } from "flowbite-react";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const ItemDetails = () => {
  const product = useLoaderData();
  const { rating } = product || {};
  return (
    <div className="container mx-auto my-10 flex justify-center items-center h-screen] overflow-hidden">
      <Card className="max-w-sm" horizontal>
        <img src={product.photo} alt="" />
        <h3 className="text-2xl font-bold tracking-tight text-blue-700 dark:text-white">
          {product.brand}
        </h3>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>

        <p className=" text-gray-700 dark:text-gray-400 font-medium">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            $ {product.price}
          </h1>
          <div>
            <Rating initialRating={rating} readonly
          
            />
          </div>
          
        </div>
        <div className="">
            <button className=" bg-red-500 w-full px-3 py-2 text-white rounded-sm">Add to cart</button>
          </div>
      </Card>
    </div>
  );
};

export default ItemDetails;
