import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const ItemDetails = () => {
  const product = useLoaderData();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cartProducts")
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
      });
  }, []);

  const handleAddToCart = (product) => {
    const isExist = cart.find((cartItem) => cartItem._id === product._id);
    if (isExist) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Product already exist!",
      });
    } else {
      setCart([...cart, product]);
    }

    fetch("http://localhost:5000/cartProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Congratulation",
            text: "Your product successfully added",
            icon: "success",
          });
        }
      });
  };

  
  return (
    <div>
      <div className="container mx-auto my-10 flex justify-center items-center h-screen] overflow-hidden">
        <div>
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
      </div>
      )
    </div>
  );
};

export default ItemDetails;
