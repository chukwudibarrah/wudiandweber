export default function Temp() {
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
                <span>
                  <NavLink to={section.url} className="">
                    {section.title}
                  </NavLink>
                </span>
              </h2>
              <div style={{ position: "relative" }}>
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-60 fixed bottom-0 left-1/2 transform -translate-x-1/2"
                />
              </div>
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
