import { NavLink } from "react-router-dom";

export default function Dev() {
  return (
    <div className="min-h-screen py-28 mx-4 md:px-8">
      <div className="my-20">
        <h1 className="text-5xl md:text-8xl font-vollkorn font-black">Website development</h1>
      </div>
      <div className="grid gap-10 xl:grid-cols-3">
      <div>
        <img src="https://images.pexels.com/photos/3760093/pexels-photo-3760093.jpeg" alt="featured image" className="" />
        <h2 className="text-3xl md:text-5xl font-montserrat font-semibold my-5">
            Project name
        </h2>
      </div>
      </div>
    </div>
  );
}
