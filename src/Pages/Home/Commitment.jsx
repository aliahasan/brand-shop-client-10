import { BiSupport } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineLocalShipping } from "react-icons/md";
const Commitment = () => {
  return (
    <div className="md:flex justify-between items-center px-12 space-y-5 md:space-y-0">
      <div className="text-center">
        <GiReturnArrow className="text-5xl flex mx-auto" />
        <div className="md:space-y-3">
          <h1>MONEY BACK GUARANTEE</h1>
          <p>Mirum est notare quam littera gothica, quam nunc putamus parum</p>
        </div>
      </div>
      <div className="text-center ">
        <BiSupport className="text-5xl flex mx-auto" />
        <div className="md:space-y-3">
          <h1>ONLINE SUPPORT 24/7</h1>
          <p>Mirum est notare quam littera gothica, quam nunc putamus parum</p>
        </div>
      </div>
      <div className="text-center">
        <MdOutlineLocalShipping className="text-5xl flex mx-auto" />
        <div className="md:space-y-3">
          <h1>FREE SHIPPING ANYWHERE </h1>
          <p>Mirum est notare quam littera gothica, quam nunc putamus parum</p>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
