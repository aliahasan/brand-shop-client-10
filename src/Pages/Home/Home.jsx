import { useContext, useEffect, useState } from "react";
import Navigate from "../../Components/Navigate";
import { ProductContext } from "../../Context/ProductProvider";
import Banner from "./Banner";
import Commitment from "./Commitment";
import MarqueeSlide from "./MarqueeSlide";
import ProductCard from "./ProductCard";

const Home = () => {
  const { products } = useContext(ProductContext);

  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    const brands = [];

    const allProducts = products.filter((item) => {
      if (!brands.find((brand) => brand === item.brand)) {
        brands.push(item.brand);
        return true;
      }
      return false;
    });

    setMyProducts(allProducts);
  }, [products]);

  return (
    <div>

      <Banner></Banner>

      <div className="my-12 pt-6">
        <MarqueeSlide></MarqueeSlide>
      </div>

      <section className="py-16">
        <div className=" container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-sm mx-auto md:max-w-none md:mx-0">

            {myProducts.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
            
          </div>
        </div>
      </section>

      <Commitment></Commitment>

      <div className="container mx-auto my-10 px-8 md:px-0">
        <Navigate></Navigate>
      </div>

    </div>
  );
};

export default Home;
