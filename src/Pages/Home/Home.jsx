import { useLoaderData } from 'react-router-dom';
const Home = () => {

    const myProducts = useLoaderData()
    console.log(myProducts)

    return (
        <div className="dark:bg-slate-800">

<div className="carousel w-full h-auto md:h-[67vh] lg:h-[78vh]">
  <div id="item1" className="carousel-item w-full">
    <img src="https://i.ibb.co/tXkc9cJ/fashion-banner3.jpg
" className="w-full " />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://i.ibb.co/vB5p0WL/fashion-banner.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://i.ibb.co/mJg1rk9/fashion-banner2.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://i.ibb.co/S0p3R9k/fashion-banner4.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>





          <div>
            {

            }
          </div>
        </div>
    );
};

export default Home;