import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// import axios from "axios";

export default function Projects() {
  const [project, setProject] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/projects")
  //   .then((response) => {
  //     setProject(response.data);

  //     // const projectsWithImageURL = response.data.map((project) => ({
  //     //   ...project,
  //     //   image: `/uploads/${project.image}`,
  //     // }));
      
  //     // setProject(projectsWithImageURL);

  //   })
  //   .catch((error) => {
  //     console.error("Error fetching projects data:", error.response)
  //   });
  // }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-1 font-outfit tracking-wide my-24 lg:mx-4 justify-items-center">
      {project.map((item, index) => (
        <div key={index}>
          <div className="my-10 px-12">
            <a href={item.link}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <img src={item.image} alt={item.title} className="lg:w-[400px] cursor-pointer" />
              </motion.div>
            </a>
            <div>
              <a href={item.url}>
                <h2 className="text-gray-600 text-2xl tracking-wide font-outfit my-2">
                  {item.title}
                </h2>
              </a>
            </div>
            <div className="text-gray-600">
              <p className="text-sm font-extralight font-outfit my-3">{item.description}</p>
              <p>Company: {item.company}</p>
              <p>Media: {item.media}</p>
              <p>Role: {item.role}</p>
              <div className="my-2">
              <a href={item.url} id="animate">See project</a>
              </div>
            </div>
            {item.github && item.github.trim() !== "" && (
              <div id="githubDiv">
                <a href={item.github}>
                  <button id="animate" className="font-extralight tracking-wider my-5">
                    See project on GitHub
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
