import { Card } from "flowbite-react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ItemDetails = () => {
  const product = useLoaderData();

  

  const handleAddToCart = () => {
   

    fetch(`http://localhost:5000/cartProducts/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: "Product successfully added",
          });
        }
      });
  };


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
        </div>
        <div className="">
          <button
            onClick={() => handleAddToCart(product)}
            className=" bg-red-500 w-full px-3 py-2 text-white rounded-sm"
          >
            Add to cart
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ItemDetails;
