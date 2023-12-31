import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as contentful from "contentful";
import PropTypes from "prop-types";

export default function Project({ contentType }) {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const client = contentful.createClient({
    space: "7vo8428oa962",
    accessToken: "nhQQDIi6ej1Kh1oh0GKgzvixMdulXLV4OSlpSh5z6J8",
    previewAccessToken: "oqWzDEnIydBMTNtXuL_6dnoSSuUZ1GYx58_7258FtoQ",
  });

  useEffect(() => {
    const fetchProject = async () => {
      if (!slug || !isFetching) {
        return;
      }

      try {
        const response = await client.getEntries({
          content_type: contentType, // Use the dynamic content_type
          "fields.slug": slug,
        });

        if (response.items.length > 0) {
          setProject(response.items[0]);
          setError(null);
        } else {
          setError("Project not found");
        }
      } catch (error) {
        console.error("Error fetching Contentful entry:", error);
        setError("Error fetching Contentful entry");
      } finally {
        setIsFetching(false);
      }
    };

    fetchProject();
  }, [client, slug, isFetching, contentType]);

  useEffect(() => {
    if (project && project.fields && project.fields.content) {
      console.log("Content:", project.fields.content);
    }
  }, [project]);

  if (isFetching) {
    return <div className="h-screen flex justify-center items-center">
      <h1 className="text-4xl font-vollkorn font-black">
        Wudi &<br />Weber
      </h1>
    </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!project) {
    return <div>No project found.</div>;
  }

  return (
    <div className="min-h-screen w-screen">
      <div className="py-28 md:py-36 px-4 md:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <img
            src={project.fields.featuredImage.fields.file.url}
            alt={project.fields.projectName}
          />
          <div className="flex items-center">
            <h1 className="text-4xl md:text-8xl font-vollkorn font-black py-10 xl:py-0 xl:px-14">
              {project.fields.projectName}
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row font-sourcecode md:text-2xl md:leading-loose">
          <div className="lg:w-4/6 xl:pt-16">
            <p>{project.fields.description}</p>
          </div>
          <div className="lg:w-2/6 lg:pl-20 uppercase xl:pt-16 py-12 lg:pt-0">
            <p>Client: {project.fields.client}</p>
            <p>Date: {project.fields.date}</p>
            <a
              href={project.fields.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              See project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


Project.propTypes = {
  contentType: PropTypes.string.isRequired,
};
