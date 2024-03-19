import { Card } from "flowbite-react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const cartProducts = useLoaderData();
 
  const [remainingProducts, setRemainingProducts] = useState(cartProducts);

  const handleDelete = (_id) => {
  
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cartProducts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success",
              });

              const remainingItems = cartProducts.filter(
                (cartProduct) => cartProduct._id !== _id
              );
              setRemainingProducts(remainingItems);
            }
          });
      }
    });
  };
  
  return (
    <div className="container mx-auto my-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {remainingProducts.map((product) => (
          <div key={product._id} className="mx-auto">
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
                  onClick={() => handleDelete(product._id)}
                  className=" bg-red-500 w-full px-3 py-2 text-white rounded-sm"
                >
                  Delete
                </button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
