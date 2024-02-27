import Marquee from "react-fast-marquee";
import img2 from '../../images/Adidas_logo.png';
import img1 from '../../images/Dior_Logo_2022.svg.png';
import img3 from '../../images/Gucci-Logo.png';
import img4 from '../../images/H&M-Logo.svg.png';
import img5 from '../../images/Nike-Logo.png';
import img6 from '../../images/Rolex_logo.svg.png';

const MarqueeSlide = () => {
  return (
    <div className="container mx-auto">
      <Marquee speed={100} pauseOnHover className="cursor-pointer ">
      <div className="flex justify-between  space-x-24 items-center w-full ">
      <div>
          <img className="w-24 h-auto" src={img1} alt="" />
        </div>
        <div>
          <img className="w-24 h-auto" src={img2} alt="" />
        </div>
        <div>
          <img className="w-28 h-auto" src={img3} alt="" />
        </div>
        <div>
          <img className="w-24 h-auto" src={img4} alt="" />
        </div>
        <div>
          <img className="w-24 h-auto" src={img5} alt="" />
        </div>
        <div>
          <img className="w-24 h-auto " src={img6} alt="" />
        </div>
      </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSlide;
