import { useState } from "react";
import Container from "../../../../components/Container/Container";
import { RiArrowDropDownLine, RiCheckboxCircleFill } from "@remixicon/react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import TestJson from "../../../../test-json/test.json";

const TopCollections = () => {
  const [filter, setFilter] = useState("last 24 hours");
  const [topCollections, setTopCollections] = useState(TestJson.topCollections);
  return (
    <section className="relative py-14">
      <Container>
        <div className="relative text-center mb-10">
          <div className="flex items-center justify-center gap-x-2 gap-y-4">
            <h2 className="text-3xl font-semibold">Top collections over</h2>
            <div className="relative group z-[99]">
              <div className="relative flex">
                <button
                  type="button"
                  className="text-primary capitalize text-3xl font-semibold flex items-center"
                >
                  {filter}
                  <span className="relative group-focus-within:rotate-180 transition-all duration-300">
                    <RiArrowDropDownLine size={30} />
                  </span>
                </button>
              </div>
              <ul className="absolute w-full top-full right-0 grid-flow-row grid-rows-none will-change-transform whitespace-nowrap p-3 bg-white shadow-full rounded-md overflow-hidden opacity-0 group-focus-within:opacity-100 invisible group-focus-within:visible transition-all duration-300">
                <li className="relative block">
                  <button
                    type="button"
                    className="relative w-full text-sm font-medium flex items-center gap-2 px-3 py-2 hover:text-primary hover:bg-slate-100 rounded-badge"
                    onClick={() => setFilter("last 24 hours")}
                  >
                    Last 24 Hours
                  </button>
                </li>
                <li className="relative block">
                  <button
                    type="button"
                    className="relative w-full text-sm font-medium flex items-center gap-2 px-3 py-2 hover:text-primary hover:bg-slate-100 rounded-badge"
                    onClick={() => setFilter("last 7 days")}
                  >
                    Last 7 Days
                  </button>
                </li>
                <li className="relative block">
                  <button
                    type="button"
                    className="relative w-full text-sm font-medium flex items-center gap-2 px-3 py-2 hover:text-primary hover:bg-slate-100 rounded-badge"
                    onClick={() => setFilter("last 30 days")}
                  >
                    Last 30 Days
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 lg:gap-8">
          {topCollections?.map((collection, index) => (
            <div className="relative col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3" key={index}>
              <div className="relative w-full rounded-3xl bg-white border border-gray-300 hover:shadow-lg transition-all duration-300">
                <div className="relative flex items-center gap-4 p-4 ps-8">
                  <Link to="/" className="relative block w-12 min-w-12 h-12">
                    <img
                      src={collection?.imageURL}
                      alt="icon"
                      className="w-full h-full"
                    />
                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 p-0.5 bg-white rounded-full flex items-center justify-center overflow-hidden">
                      <span className="relative flex items-center justify-center w-full h-full bg-black rounded-full text-white text-xs">
                        {index + 1}
                      </span>
                    </span>
                    {collection?.verified && (
                      <Tippy content="Verified">
                        <span className="absolute -left-3 -bottom-1 w-6 h-6 bg-white rounded-full flex items-center justify-center text-primary overflow-hidden">
                          <RiCheckboxCircleFill size={24} />
                        </span>
                      </Tippy>
                    )}
                  </Link>
                  <div className="relative flex flex-col justify-between gap-2">
                    <Link
                      to="/"
                      className="text-md font-bold hover:text-primary transition-all duration-300"
                    >
                      {collection.title}
                    </Link>
                    <p className="text-sm font-light">{collection.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TopCollections;
