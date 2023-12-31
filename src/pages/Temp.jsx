import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as contentful from "contentful";

export default function Dev() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const client = contentful.createClient({
    space: "7vo8428oa962",
    accessToken: "nhQQDIi6ej1Kh1oh0GKgzvixMdulXLV4OSlpSh5z6J8",
    previewAccessToken: 'oqWzDEnIydBMTNtXuL_6dnoSSuUZ1GYx58_7258FtoQ',
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        if (projects.length === 0) {
          const response = await client.getEntries({
            content_type: "webDevelopment",
          });
  
          setProjects(response.items);
        }
      } catch (error) {
        console.error("Error fetching Contentful entries:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching, regardless of success or failure
      }
    };
  
    fetchProjects();
  }, [client, projects]);

  

  return (
    <div className="size-full mx-4 md:px-8">
      <div>
        {projects.map((project) => (
          <NavLink
            key={project.sys.id}
            to={`/webdevelopment/${project.fields.slug}`}
          >
            <div className="">
              <h2 className="text-3xl md:text-5xl font-sourcecode font-bold py-8 md:py-12 group text-charcoal main-decor">
                <span className="animate-decor">
                {project.fields.projectName}
                </span>
              </h2>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
