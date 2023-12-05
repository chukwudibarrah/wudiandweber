import { useEffect, useState } from "react";
import Form from "../components/Form";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const threshold = windowHeight * 0.2;

    const newActiveSection = Math.floor(
      (scrollPosition + threshold) / windowHeight
    );

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  const arrow = (
    <svg
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      height="50"
      width="50"
      stroke="#9D69A3"
      fill="#9D69A3"
      strokeWidth={2}
    >
      <path
        d="M226.82812,162.82861l-48,48-.00537.00434a4.02146,4.02146,0,0,1-.60351.49328c-.10156.06781-.21143.11457-.31738.17212a3.89769,3.89769,0,0,1-.37159.1955,3.96491,3.96491,0,0,1-.40966.12726c-.1128.03308-.22071.07678-.33741.09991a3.92277,3.92277,0,0,1-1.5664,0c-.1167-.02313-.22412-.06677-.33692-.09973a2.32424,2.32424,0,0,1-.78076-.32239c-.10644-.05768-.21631-.10467-.31836-.17267a4.02146,4.02146,0,0,1-.60351-.49328l-.00538-.00434-48-48a3.99992,3.99992,0,0,1,5.65625-5.65722L172,198.34326V68H32a4,4,0,0,1,0-8H176a4.0002,4.0002,0,0,1,4,4V198.34326l41.17187-41.17187a3.99992,3.99992,0,1,1,5.65625,5.65722Z"
        className="fill-red"
      ></path>
    </svg>
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Set a threshold to load the next h2 element just before the next section
      const threshold = windowHeight * 0.495;

      const newActiveSection = Math.floor(
        (scrollPosition + threshold) / windowHeight
      );

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const sections = [
    {
      color: "feldgrau",
      title: "Web Development",
      zIndex: 0,
      textColor: "crayola",
      textContent:
        "We're an award-winning digital agency with more than a decade of experience",
      arrow: arrow,
      url: "/webdevelopment"
    },
    {
      color: "crayola",
      title: "Branding",
      zIndex: 20,
      textColor: "cosmiclatte",
      url: "/branding"
    },
    {
      color: "engviolet",
      title: "Editing & Copywriting",
      zIndex: 10,
      textColor: "gunmetal",
      url: "/copywriting"
    }
  ];

  return (
    <main className="min-h-screen w-screen overscroll-none overflow-hidden flex flex-col items-center justify-center bg-charcoal relative">
      {sections.map((section, index) => (
        <section
          key={index}
          className={`h-screen bg-${section.color} w-full relative ${
            index === activeSection ? "active" : ""
          }`}
          style={{ zIndex: section.zIndex }}
        >
          <div className="grid justify-items-center text-center mt-28 md:mt-32">
            <p className="w-9/12 lg:w-4/12 mb-3 font-sourcecode md:text-2xl text-engviolet">
              {section.textContent}
            </p>
            {section.arrow}
          </div>
          {index === activeSection && (
            <div className="h-full flex justify-center items-center text-center">
              <h2
                className={`text-5xl mb-11 md:text-8xl font-vollkorn font-extrabold fixed top-1/2 transform -translate-y-1/2 text-${section.textColor}`}
              >
                <span><NavLink to={section.url} className="">
                {section.title}
                </NavLink>
                </span>
              </h2>
            </div>
          )}
        </section>
      ))}
      <div className="h-screen w-screen bg-cosmiclatte z-20 flex justify-center">
        <div className="md:w-5/12 w-10/12">
          <h2 className="text-center text-engviolet font-vollkorn text-3xl md:text-5xl font-extrabold mt-32">
            Send Us a Message
          </h2>
          <div className="flex justify-center my-16">
          <Form />
          </div>
        </div>
      </div>
    </main>
  );
}
