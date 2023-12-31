import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";


export default function About() {
  return (
    <div>
      <div className="h-screen w-screen bg-pink-200 md:bg-aboutImage bg-center bg-no-repeat flex justify-center justify-content-center">
        <h1 className="w-full h-full flex justify-center items-center">
        Hero section
        </h1>
      </div>
      <h2>
        About us
      </h2>
    </div>
  );
}
