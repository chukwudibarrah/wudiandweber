import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Logo =
  "https://raw.githubusercontent.com/chukwudibarrah/wudiandweber/main/public/wshort.png";

export default function Drawer() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleHideDrawer() {
    setShowDrawer(!showDrawer);
  }

  return (
    <>
      <div
        className={`fixed top-6 left-4 md:left-8 z-40 transition-all duration-1000 ${
          scrollY > 29 ? "hidden" : ""
        }`}
      >
        <NavLink to="/">
          <h3 className="font-vollkorn text-xl md:text-5xl font-black leading-5 text-engviolet">
            Wudi&
            <br />
            Weber
          </h3>
          <p className="hidden md:block uppercase font-sourcecode text-xs md:text-sm text-engviolet">
            creative collective
          </p>
        </NavLink>
      </div>

      {showDrawer ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-14 h-14 flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50 stroke-2 stroke-engviolet ${
            scrollY > 30 ? "bg-engviolet stroke-white" : ""
          } px-3 hover:drop-shadow-2xl border-[1px] border-engviolet hover:bg-engviolet hover:stroke-white transition-colors duration-1000`}
          onClick={() => setShowDrawer(!showDrawer)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-14 h-14 flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50 stroke-2 stroke-engviolet ${
            scrollY > 30 ? "bg-engviolet stroke-white" : ""
          } px-3 hover:drop-shadow-2xl border-[1px] border-engviolet hover:bg-engviolet hover:stroke-white transition-colors duration-1000`}
          onClick={() => setShowDrawer(!showDrawer)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      )}

      <div
        className={`top-0 left-0 overscroll-none overflow-hidden bg-gunmetal p-10 pl-15 text-engviolet fixed min-h-screen z-40 ease-in-out duration-700 transform ${
          showDrawer ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ width: "100%" }}
      >
        <Nav handleHideDrawer={handleHideDrawer} />
      </div>
    </>
  );
}
