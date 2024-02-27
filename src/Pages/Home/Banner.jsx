const Banner = () => {
  return (
    <div className="dark:bg-slate-800">
      <div className="carousel w-full h-auto md:h-[67vh] lg:h-[78vh] relative">
        <div id="item1" className="carousel-item w-full ">
          <img
            src="https://i.ibb.co/tXkc9cJ/fashion-banner3.jpg"
            className="w-full"
          />
          <div className=" banner-text">
            <div className="">
              <h1 className="text-lg md:text-4xl md:text-center lg:text-start lg:text-7xl ">
                Winter Collection 2024
              </h1>

              <p className="banner-p">
                Embrace the floral frenzy of spring with our enchanting prints
                and patterns. Blossoms of every hue adorn dresses, tops, and
                skirts, infusing your wardrobe with the joyous spirit of natures
                rebirth.
              </p>
              <p className="md:hidden text-[11px] pt-2">
                Buy your favorite and exiting collection
              </p>
              <div className="pt-4 md:text-center lg:w-1/2 lg:text-center lg:ml-16">
                <button className="primary-btn">Shop now</button>
              </div>
            </div>
          </div>
        </div>

        <div id="item2" className="carousel-item w-full relative">
          <img
            src="https://i.ibb.co/vB5p0WL/fashion-banner.jpg"
            className="w-full "
          />
          <div className=" banner-text2">
            <div className="">
              <h1 className="text-lg md:text-4xl md:text-center lg:text-start lg:text-7xl">
                Winter Collection 2024
              </h1>

              <p className="banner-p">
                Embrace the floral frenzy of spring with our enchanting prints
                and patterns. Blossoms of every hue adorn dresses, tops, and
                skirts, infusing your wardrobe with the joyous spirit of natures
                rebirth.
              </p>
              <p className="md:hidden text-[11px] pt-2">
                Buy your favorite and exiting collection
              </p>
              <div className="pt-4 md:text-center lg:w-1/2 lg:text-center lg:ml-16">
                <button className="primary-btn">Shop now</button>
              </div>
            </div>
          </div>
        </div>

        <div id="item3" className="carousel-item w-full relative">
          <img
            src="https://i.ibb.co/mJg1rk9/fashion-banner2.jpg"
            className="w-full "
          />
          <div className=" banner-text2">
            <div className="">
              <h1 className="text-lg md:text-4xl md:text-center lg:text-start lg:text-7xl">
                Winter Collection 2024
              </h1>

              <p className="banner-p">
                Embrace the floral frenzy of spring with our enchanting prints
                and patterns. Blossoms of every hue adorn dresses, tops, and
                skirts, infusing your wardrobe with the joyous spirit of natures
                rebirth.
              </p>
              <p className="md:hidden text-[11px] pt-2">
                Buy your favorite and exiting collection
              </p>
              <div className="pt-4 md:text-center lg:w-1/2 lg:text-center lg:ml-16">
                <button className="primary-btn">Shop now</button>
              </div>
            </div>
          </div>
        </div>

        <div id="item4" className="carousel-item w-full relative">
          <img
            src="https://i.ibb.co/S0p3R9k/fashion-banner4.jpg"
            className="w-full object-fill"
          />
        </div>
      </div>

      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
