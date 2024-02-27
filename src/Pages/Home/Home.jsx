import { useContext } from "react";
import { ProductContext } from "../../Context/ProductProvider";
import Banner from "./Banner";
import Commitment from "./Commitment";
import MarqueeSlide from "./MarqueeSlide";
import ProductCard from "./ProductCard";

const Home = () => {
  const { products } = useContext(ProductContext);
  console.log (typeof(products))

  return (
    <div>
      <Banner></Banner>
      <div className="my-12 pt-6">
        <MarqueeSlide></MarqueeSlide>
      </div>
      <section className="py-16">
        <div className=" container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        </div>
      </section>

      <Commitment></Commitment>
    </div>
  );
};

export default Home;
