import { useState } from "react";
import Nav from "./Nav";

const Logo = "https://raw.githubusercontent.com/chukwudibarrah/wudiandweber/main/public/wshort-blk.png";

export default function Drawer() {
  const [showDrawer, setShowDrawer] = useState(false);

  function handleHideDrawer() {
    setShowDrawer(!showDrawer);
  }

  return (
    <>
      <div className="fixed top-6 left-10 z-40">
        <img
          src={Logo}
          alt="Logo"
          className="w-28 h-28 cursor-pointer hover:drop-shadow-2xl"
        />
      </div>

      {showDrawer ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-14 h-14 flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50 stroke-2 stroke-crayola hover:drop-shadow-2xl"
          onClick={() => setShowDrawer(!showDrawer)}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-14 h-14 fixed z-50 flex items-center cursor-pointer right-10 top-6 stroke-2 stroke-crayola hover:drop-shadow-2xl"
          onClick={() => setShowDrawer(!showDrawer)}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      )}

      <div
        className={`top-0 left-0 overscroll-none overflow-hidden min-w-screen bg-gunmetal p-10 pl-15 text-engviolet fixed min-h-screen z-40 ease-in-out duration-700 ${
          showDrawer ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <Nav handleHideDrawer={handleHideDrawer} />
      </div>
    </>
  );
}
