import { RiCloseLine, RiSearchEyeLine } from "@remixicon/react";
import { useState } from "react";

const Search = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  return (
    <div className="relative group">
      <button
        type="button"
        className="relative inline-flex items-center justify-center w-9 min-w-9 h-9 rounded-full bg-white border border-gray-100 hover:bg-primary hover:text-white hover:border-transparent"
        onClick={() => setToggleSearch(!toggleSearch)}
      >
        <RiSearchEyeLine size={16} />
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full min-h-full flex items-center justify-center bg-white ${
          toggleSearch ? "opacity-100 visible" : "opacity-0 invisible"
        } z-[9999] transition-all duration-300`}
      >
        <button
          type="button"
          className="absolute top-3 right-3 inline-flex items-center justify-center w-9 min-w-9 h-9 rounded-full bg-white border border-gray-100"
          onClick={() => setToggleSearch(!toggleSearch)}
        >
          <RiCloseLine size={18} />
        </button>
        <div className="relative grid grid-cols-1 gap-6 w-full max-w-xl">
          <div className="relative w-full">
            <input
              type="text"
              spellCheck
              placeholder="Search..."
              className="relative w-full h-12 border border-gray-300 outline-none rounded-md text-sm px-3"
            />
          </div>
          <ul className="relative w-full h-full min-h-96 max-h-96 overflow-y-auto border border-gray-300 rounded-md p-3 transition-all duration-300">
            <li className="relative block w-full text-center text-sm">
              Sorry! No data found.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
