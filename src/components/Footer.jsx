import { NavLink } from "react-router-dom";

const Logo =
  "https://raw.githubusercontent.com/chukwudibarrah/wudiandweber/main/public/wshort.png";

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
              <img src={Logo} alt="Logo" className="w-20 md:w-28 cursor-pointer hover:drop-shadow-2xl" />
            </NavLink>
            <p>This is the tagline here</p>
          </div>
          <div className="grid grid-cols-1 border-crayola lg:border-r-2 border-b-2 lg:border-b-0 lg:py-16 py-8 leading-loose uppercase px-4 lg:px-8">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
          </div>
          <div className="lg:py-16 py-8 lg:px-14 px-4 lg:px-8">
            <p>
              © 2023 WUDI & WEBER CREATIVE COLLECTIVE,
              <br />
              ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>
  )
}