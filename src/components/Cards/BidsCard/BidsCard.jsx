import PropTypes from "prop-types";
import { RiHeartLine } from "@remixicon/react";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";

const BidsCard = ({ bidData }) => {
  return (
    <div className="relative w-full h-full border border-gray-300 rounded-2xl">
      <div className="p-5">
        <div className="relative w-full">
          <img
            src={bidData?.imageURL}
            alt="nft"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="relative mt-5">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <Link
              to="/"
              className="text-base font-semibold hover:text-primary transition-all duration-300"
            >
              {bidData.title}
            </Link>
            <div className="p-0.5 px-2 flex items-center border border-gray-300 rounded-md">
              <img
                src={`/assets/images/blockchain/${bidData?.currency}.webp`}
                alt="eth"
                className="w-3.5"
              />
              <span className="text-sm text-green-500">{bidData?.price}</span>
            </div>
          </div>
          <div className="mt-2 text-sm flex items-center gap-1">
            <span>Current Bid</span>
            <span>{bidData?.currentBid}</span>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              className="text-sm font-semibold text-primary"
            >
              Place bid
            </button>
            <Tippy content="Favorite">
              <button
                type="button"
                className="text-sm inline-flex items-center gap-1"
              >
                <RiHeartLine size={18} />
                {/* <RiHeartFill size={18} /> */}
                {bidData?.favorites}
              </button>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
};

BidsCard.propTypes = {
  bidData: PropTypes.any,
};

export default BidsCard;
