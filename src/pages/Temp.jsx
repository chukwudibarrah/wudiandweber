export default function Temp() {
  return (
    <main className="min-h-screen w-screen overscroll-none overflow-hidden flex flex-col items-center justify-center bg-charcoal relative">
      <section className="bg-feldgrau h-full">
        <div className="grid justify-items-center text-center mt-28 md:mt-32">
          <div>
            <p className="w-9/12 lg:w-3/12 mb-3 font-montserrat text-xl md:text-2xl text-engviolet">
              We&apos;re an award-winning digital agency with over 10 years of
              experience
            </p>
          </div>
          <a href="#">
            <h1 className="text-5xl text-crayola mb-11 md:text-8xl font-didot font-extrabold fixed top-1/2 transform -translate-y-1/2">
              Web Development
            </h1>
          </a>
        </div>
      </section>
      <section className="bg-crayola h-full">
        <div className="grid justify-items-center text-center mt-28 md:mt-32">
          <a href="#">
            <h1 className="text-5xl text-cosmiclatte mb-11 md:text-8xl font-didot font-extrabold fixed top-1/2 transform -translate-y-1/2">
              Branding
            </h1>
          </a>
        </div>
      </section>
      <section className="bg-engviolet h-full">
        <div className="grid justify-items-center text-center mt-28 md:mt-32">
          <a href="#">
            <h1 className="text-5xl text-crayola mb-11 md:text-8xl font-didot font-extrabold fixed top-1/2 transform -translate-y-1/2">
              Editng & Copywriting
            </h1>
          </a>
        </div>
      </section>
    
    </main>
  );
}
