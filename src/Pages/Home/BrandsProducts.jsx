import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ProductContext } from "../../Context/ProductProvider";

const BrandsProducts = () => {

  
  const loadedProducts = useLoaderData();
  const { products } = useContext(ProductContext);
  const [filterBrand, setFilterBrand] = useState(products);

  useEffect(() => {
    const brandDetails = products.filter(
      (product) => product.brand === loadedProducts.brand
    );
    setFilterBrand(brandDetails);
  }, [products,loadedProducts.brand]);

  

  return ( 
    <div>


      <div className="container mx-auto px-4 md:px-2 lg:px-0">
      <div className="my-10 grid grid-cols-1 md:grid-cols-2  py-10  rounded-md gap-6">
        {filterBrand.map((brand) => (
          <div key={brand._id}>
            <div className="w-full ">
              <img
                src={brand.photo}
                alt=""
                className="rounded-lg w-full md:h-[220px] lg:h-[450px]"
              />

              <div className="flex justify-center items-center   ">
                <div className="text-center">
                  <h1 className="text-xl font-bold">{brand.brand}</h1>
                  <div className="font-medium">
                    <p className="">{brand.name}</p>
                    <p className="leading-8 font-medium">{brand.description}</p>

                    <p>{brand.type}</p>
                    <p>$ {brand.price}</p>
                    <div>
                    
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-center py-4 text-white hover:text-red-700 ">
                <div>
                  <Link to={`/item-details/${brand._id}`}>
                    <button className="px-5 py-2 w-full bg-blue-300 font-semibold">
                      Details
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to={`/item-update/${brand._id}`}>
                    <button className="px-5 py-2 w-full bg-blue-300 font-semibold">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
   
  );
};

export default BrandsProducts;