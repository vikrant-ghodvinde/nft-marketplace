import { Link } from "react-router-dom";
import Container from "../../../../components/Container/Container";

const Banner = () => {
  return (
    <section className="relative min-h-lvh pb-20 pt-36 bg-gradient-image bg-cover overflow-x-hidden">
      <Container>
        <div className="grid grid-cols-12 items-center gap-x-5 gap-y-24">
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <div className="text-center md:text-start">
              <h1 className="text-6xl font-bold leading-tight mb-4">
                Buy, sell and collect NFTs.
              </h1>
              <p className="text-xl">
                The world&apos;s largest digital marketplace for crypto
                collectibles and non-fungible tokens
              </p>
              <div className="mt-10 flex items-center gap-3 flex-wrap justify-center md:justify-start">
                <Link to="/" className="button button-lg button-primary shadow-primary-volume">
                  Upload
                </Link>
                <Link to="/" className="button button-lg button-secondary shadow-white-volume">
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-8">
            <div className="relative text-center md:pl-8 rtl:md:pr-8 !rtl:md:pl-0 md:text-right rtl:md:text-left">
              <div className="relative inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]">
                <img
                  src="/assets/images/hero.jpg"
                  alt="banner"
                  className="w-full h-full max-sm:rounded-[100px] rounded-[170px]"
                />
              </div>
              <img
                src="/assets/images/3D_elements.png"
                alt=""
                className="absolute top-0 animate-fly md:-right-[10%] rtl:md:right-[10%]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
