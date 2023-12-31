import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="font-montserrat md:text-2xl">
      <div className=" px-4 md:px-8 md:py-10">
        <hr className="border-2 border-crayola" />
      </div>
      <div className="">
        <img
          src="https://images.pexels.com/photos/1527828/pexels-photo-1527828.jpeg"
          alt="footer image"
          className="my-10 px-4 md:px-8"
        />
      </div>
      <div className="w-screen">
        <hr className="border-crayola border-2" />
      </div>
      <div className="grid lg:grid-cols-3 xl:grid-cols-5">
        <div className="border-crayola lg:border-r-2 border-b-2 lg:border-b-0 lg:py-16 py-8 px-4 lg:px-8">
          <NavLink to="/">
            <h3 className="font-vollkorn text-xl md:text-5xl font-black leading-5 text-engviolet">
              Wudi&
              <br />
              Weber
            </h3>
            <p className="uppercase font-sourcecode text-xs md:text-sm text-engviolet">
              creative collective
            </p>
          </NavLink>
          <p className="my-3 font-sourcecode text-xs md:text-lg">
            Creating digital experiences
          </p>
        </div>
        <div className="grid grid-cols-1 border-crayola lg:border-r-2 border-b-2 lg:border-b-0 lg:py-16 py-8 uppercase px-4 lg:px-8 font-sourcecode text-xs md:text-lg">
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
        <div className="lg:py-16 py-8 px-4 lg:px-8 font-sourcecode text-xs md:text-lg">
          <p>
            © 2023 WUDI & WEBER CREATIVE COLLECTIVE,
            <br />
            ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
