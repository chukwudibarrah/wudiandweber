import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";

export default function Nav({ handleHideDrawer }) {
  return (
    <nav className="min-h-screen w-screen overscroll-none overflow-hidden flex items-center z-30 font-vollkorn font-black">
      <p className="absolute -z-10 text-[130px] leading-[200px] md:text-[400px] md:leading-[400px] opacity-5 text-gray-200 font-extrabold">
        menu
      </p>
      <div className="fixed top-6 left-4 md:left-8 z-40">
        <NavLink 
        to="/" 
        onClick={() => handleHideDrawer()}>
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
      <div>
        <motion.div className="grid items-center justify-items-center">
          <ul className="pt-10">
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: "100%" }}
              transition={{ delay: 0.5, duration: 0.75 }}
              className="nav-item mb-10 hover:drop-shadow-2xl group text-charcoal transition-all duration-300 ease-in-out"
            >
              <NavLink
                to="/"
                className="text-5xl md:text-8xl font-black bg-left-bottom bg-gradient-to-r from-charcoal to-charcoal bg-[length:100%_8px] bg-no-repeat group-hover:bg-[length:0%_8px] transition-all duration-700 ease-out"
                onClick={() => handleHideDrawer()}
              >
                Home
              </NavLink>
            </motion.li>
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="nav-item mb-10 hover:drop-shadow-2xl group text-charcoal transition-all duration-300 ease-in-out"
            >
              <NavLink
                to="/about"
                className="text-5xl md:text-8xl font-black bg-left-bottom bg-gradient-to-r from-charcoal to-charcoal bg-[length:100%_8px] bg-no-repeat group-hover:bg-[length:0%_8px] transition-all duration-700 ease-out"
                onClick={() => handleHideDrawer()}
              >
                About
              </NavLink>
            </motion.li>
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: "100%" }}
              transition={{ delay: 0.5, duration: 1.15 }}
              className="nav-item mb-10 hover:drop-shadow-2xl group text-charcoal transition-all duration-300 ease-in-out"
            >
              <NavLink
                to="/projects"
                className="text-5xl md:text-8xl font-black bg-left-bottom bg-gradient-to-r from-charcoal to-charcoal bg-[length:100%_8px] bg-no-repeat group-hover:bg-[length:0%_8px] transition-all duration-700 ease-out"
                onClick={() => handleHideDrawer()}
              >
                Projects
              </NavLink>
            </motion.li>
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: "100%" }}
              transition={{ delay: 0.5, duration: 1.15 }}
              className="nav-item mb-10 hover:drop-shadow-2xl group text-charcoal transition-all duration-300 ease-in-out"
            >
              <NavLink
                to="/contact"
                className="text-5xl md:text-8xl font-black bg-left-bottom bg-gradient-to-r from-charcoal to-charcoal bg-[length:100%_8px] bg-no-repeat group-hover:bg-[length:0%_8px] transition-all duration-700 ease-out"
                onClick={() => handleHideDrawer()}
              >
                Contact
              </NavLink>
            </motion.li>
          </ul>
          <div className="flex font-sourcecode font-normal justify-evenly mt-10 md:mt-20 w-screen uppercase">
            <NavLink className="my-3 group text-charcoal main-decor" href="#">
              <span className="animate-decor">Instagram</span>
            </NavLink>
            <NavLink className="my-3 group text-charcoal main-decor" href="#">
              <span className="animate-decor">Facebook</span>
            </NavLink>
            <NavLink className="my-3 group text-charcoal main-decor" href="#">
              <span className="animate-decor">LinkedIn</span>
            </NavLink>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
