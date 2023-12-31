import FetchWebDev from "../components/FetchWebDev";
import FetchCopywriting from "../components/FetchCopywriting";

export default function Projects() {
  return (
    <div>
      <div className="pt-28 md:pt-52 px-4 md:px-8">
        <h1 className="text-5xl md:text-8xl font-vollkorn font-black">
          Selected projects
        </h1>
      </div>
      <div className="py-28">
        <FetchWebDev />
        <FetchCopywriting />
      </div>
    </div>
  );
}
