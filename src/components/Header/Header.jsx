import { Link } from "react-router-dom";
import Container from "../Container/Container";
import {
  RiAppsLine,
  RiArrowDownSLine,
  RiBasketballLine,
  RiBearSmileLine,
  RiCameraLensLine,
  RiCloseLine,
  RiImageCircleLine,
  RiInputMethodLine,
  RiMenuFill,
  RiMusicFill,
  RiNewspaperLine,
  RiPaletteLine,
  RiWallet3Fill,
  RiWallet3Line,
} from "@remixicon/react";
import { useEffect, useState } from "react";
import UserDropdown from "../UserDropdown/UserDropdown";
import Search from "../Search/Search";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`w-full fixed top-0 left-0 py-7 lg:py-0 z-[999] ${
        offset > 50 ? "backdrop-blur-lg" : ""
      }`}
    >
      <Container fluid>
        <div className="relative flex items-center justify-between gap-5">
          <Link to="/">
            <img
              src="/assets/images/logo.png"
              alt="xhibiter"
              className="w-32"
            />
          </Link>
          <div className="relative flex items-center gap-5">
            <div className="menu-wrapper">
              <ul className={`menus ${menuToggle ? "active" : ""}`}>
                <li className="menu-item group">
                  <Link to="/" className="menu-link group-hover:text-primary">
                    Home
                  </Link>
                </li>
                <li className="menu-item group">
                  <Link to="/" className="menu-link group-hover:text-primary">
                    About
                  </Link>
                </li>
                <li className="menu-item has-submenu group">
                  <span
                    role="button"
                    className="menu-link group-hover:text-primary"
                  >
                    Explore
                    <i>
                      <RiArrowDownSLine size={16} />
                    </i>
                  </span>
                  <ul className="submenu">
                    <li className="submenu-item">
                      <Link className="submenu-link">
                        <RiAppsLine size={18} /> All
                      </Link>
                    </li>
                    <li className="submenu-item">
                      <Link className="submenu-link">
                        <RiPaletteLine size={18} /> Art
                      </Link>
                    </li>
                    <li className="submenu-item">
                      <Link className="submenu-link">
                        <RiBearSmileLine size={18} /> Collectibles
                      </Link>
                    </li>
                    <li className="submenu-item">
                      <Link className="submenu-link">
                        <RiInputMethodLine size={18} /> Domain Names
                      </Link>
                    </li>
                    <li className="submenu-item">
                      <Link className="submenu-link">
                        <RiMusicFill size={18} /> Music
                      </Link>
                    </li>
                    <li className="submenu-item">
                      <Link className="submenu-link">
                        <RiCameraLensLine size={18} /> Photography
                      </Link>
                    </li>
                    <li className="submenu-item">
                      <Link className="submenu-link">
                        <RiBasketballLine size={18} /> Sports
                      </Link>
                    </li>
                    <li className="submenu-item">
                      <Link className="submenu-link">
                        <RiNewspaperLine size={18} /> Trading Cards
                      </Link>
                    </li>
                    <li className="submenu-item">
                      <Link className="submenu-link">
                        <RiWallet3Line size={18} /> Utility
                      </Link>
                    </li>
                    <li className="submenu-item">
                      <Link className="submenu-link">
                        <RiImageCircleLine size={18} /> Virtual Worlds
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item has-submenu group">
                  <span
                    role="button"
                    className="menu-link group-hover:text-primary"
                  >
                    Resources
                    <i>
                      <RiArrowDownSLine size={16} />
                    </i>
                  </span>
                  <ul className="submenu is-sm">
                    <li className="submenu-item">
                      <Link className="submenu-link">Help Center</Link>
                    </li>
                    <li className="submenu-item">
                      <Link className="submenu-link">Platform Status</Link>
                    </li>
                    <li className="submenu-item">
                      <Link className="submenu-link">Partners</Link>
                    </li>
                    <li className="submenu-item">
                      <Link className="submenu-link">Blog</Link>
                    </li>
                    <li className="submenu-item">
                      <Link className="submenu-link">Single Post</Link>
                    </li>
                    <li className="submenu-item">
                      <Link className="submenu-link">Newsletter</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item group">
                  <Link to="/" className="menu-link group-hover:text-primary">
                    Create
                  </Link>
                </li>
              </ul>
            </div>
            <div className="relative flex items-center gap-2">
              <Search />
              <button
                type="button"
                className="relative inline-flex items-center justify-center w-9 min-w-9 h-9 rounded-full bg-white border border-gray-100 hover:bg-primary hover:text-white hover:border-transparent"
              >
                <RiWallet3Fill size={16} />
              </button>
              <UserDropdown />
              <div className="relative hidden max-lg:block">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center w-9 min-w-9 h-9 rounded-full bg-white border border-gray-100 hover:bg-primary hover:text-white hover:border-transparent"
                  onClick={() => setMenuToggle(!menuToggle)}
                >
                  {!menuToggle ? (
                    <RiMenuFill size={16} />
                  ) : (
                    <RiCloseLine size={18} />
                  )}
                  {/*  */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
