

export default function Project() {
  return (
    <div className="min-h-screen w-screen">
      <div className="py-28 md:py-36 px-4 md:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <img
            src="https://images.pexels.com/photos/3760093/pexels-photo-3760093.jpeg"
            alt="featured image"
          />
          <div className="flex items-center">
            <h1 className="text-4xl md:text-8xl font-vollkorn font-black py-10 xl:py-0 xl:px-14">
              Website development
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row font-sourcecode md:text-2xl md:leading-loose">
          <div className="lg:w-4/6 xl:pt-16">
            <p>
              Ulla ut felis tristique, dolor euismod faucibus eu vitae velit.
              Praesent non enim efficitur, metus non, facilisis lectus.
              Curabitur in porttitors turpis, quis metus malesuada nisl. Ut
              acmauris vel ligula mattis tristique. Cras lacinia neque vel
              suscipit mattis. Duis vita sit amet nibh dictum eleifend a erat
              fusce libero pulvinar, aliqua neque et, rutrdonec augue est quis
              massa heme natoque penatibus. Aenean commodo ligula eget dolor. In
              tibique officis ad soletus intellegat est id, tale regione
              adolescens pri ei movet numquam.
            </p>
          </div>
          <div className="lg:w-2/6 lg:pl-20 uppercase xl:pt-16 py-12 lg:pt-0">
            <p>Client: Client name here</p>
            <p>Date: 2023</p>
            <a href="#">See project</a>
          </div>
        </div>
      </div>
    </div>
  );
}
