import {
  RiFileCopyLine,
  RiLogoutCircleFill,
  RiSettings3Fill,
  RiUser3Fill,
} from "@remixicon/react";
import Tippy from "@tippyjs/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  const [walletAddress, setWalletAddress] = useState(
    "0x7a86c0b064171007716bbd6af96676935799a63e"
  );
  const [copied, setCopied] = useState(false);
  const handleAddessCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="relative group py-4">
      <button
        type="button"
        className="relative inline-flex items-center justify-center w-9 min-w-9 h-9 rounded-full bg-white border border-gray-100 hover:bg-primary hover:text-white hover:border-transparent"
      >
        <RiUser3Fill size={16} />
      </button>
      <div className="absolute top-full right-0 grid-flow-row grid-rows-none will-change-transform whitespace-nowrap p-5 bg-white shadow-full rounded-md overflow-hidden opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
        <div className="flex flex-col gap-4">
          <Tippy content={copied ? "Copied" : "Copy"}>
            <button
              type="button"
              className="font-medium flex items-center gap-1"
              onClick={handleAddessCopy}
            >
              <span className="max-w-[10rem] overflow-hidden text-ellipsis">
                {walletAddress}
              </span>
              <RiFileCopyLine size={14} />
            </button>
          </Tippy>
          <div className="p-3 rounded-md border border-gray-200">
            <h6 className="text-sm mb-1">Balance</h6>
            <div className="flex items-center gap-1">
              <img
                src="/assets/images/blockchain/eth.webp"
                alt="eth"
                className="w-4 opacity-80"
              />
              <h4 className="text-xl font-medium text-green-500">10 ETH</h4>
            </div>
          </div>
          <ul className="rid-flow-row grid-rows-none">
            <li className="relative block">
              <Link
                to="/"
                className="relative flex items-center gap-2 px-3 py-2.5 text-xs font-medium hover:text-primary hover:bg-slate-100 rounded-badge max-lg:hover:bg-transparent max-lg:rounded-none"
              >
                <RiUser3Fill size={16} /> My Profile
              </Link>
            </li>
            <li className="relative block">
              <Link
                to="/"
                className="relative flex items-center gap-2 px-3 py-2.5 text-xs font-medium hover:text-primary hover:bg-slate-100 rounded-badge max-lg:hover:bg-transparent max-lg:rounded-none"
              >
                <RiSettings3Fill size={16} /> Edit Profile
              </Link>
            </li>
            <li className="relative block">
              <Link
                to="/"
                className="relative flex items-center gap-2 px-3 py-2.5 text-xs font-medium hover:text-primary hover:bg-slate-100 rounded-badge max-lg:hover:bg-transparent max-lg:rounded-none"
              >
                <RiLogoutCircleFill size={16} /> Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
