import FetchWebDev from "../components/FetchWebDev";

export default function WebDev() {
  
  return (
    <div>
      <div className="pt-28 md:pt-52 px-4 md:px-8">
        <h1 className="text-5xl md:text-8xl font-vollkorn font-black">
          Website development projects
        </h1>
      </div>
      <div className="py-20">
        <FetchWebDev />
      </div>
    </div>
  );
}
