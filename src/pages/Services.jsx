import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <main className="py-40 md:pt-80 px-4 md:px-8 bg-cosmiclatte">
      {/* First section starts */}
      <section>
        <div>
          <h1 className="text-5xl md:text-8xl text-crayola font-vollkorn font-black">
            What we do
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 py-20 font-sourcecode text-xl text-gunmetal">
          <div className="h-[30rem] lg:h-[50rem] p-6 lg:p-10 border-x-[0.5px] border-y-[0.5px] border-crayola flex flex-col justify-between">
            <p className="uppercase">Copywriting & editing</p>
            <p className="">
              Words that work
              <br />
              <br />
              Craft powerful messages with our copywriting and editing
              expertise. From websites to marketing materials, we refine your
              message for maximum impact, ensuring clear, concise, and
              persuasive communication.
            </p>
          </div>
          <div className="h-[30rem] lg:h-[50rem] p-6 lg:p-10 border-x-[0.5px] border-y-[0.5px] border-crayola flex flex-col justify-between">
            <p className="uppercase">Responsive web design</p>
            <p className="">
              Any device, anywhere
              <br />
              <br />
              Our responsive web design ensures your website looks fantastic and
              functions seamlessly on all devices. Enjoy a visually stunning and
              user-friendly website that adapts to your visitors&apos; screens,
              enhancing your online presence.
            </p>
          </div>
          <div className="h-[30rem] lg:h-[50rem] p-6 lg:p-10 border-x-[0.5px] border-y-[0.5px] border-crayola flex flex-col justify-between">
            <p className="uppercase">E-commerce website development</p>
            <p className="">
              Sell smart online
              <br />
              <br />
              Transform casual browsers into loyal customers with our e-commerce
              website development. We focus on creating user-friendly and
              visually appealing online stores, optimizing the entire shopping
              experience for your customers.
            </p>
          </div>
          <div className="h-[30rem] lg:h-[50rem] p-6 lg:p-10 border-x-[0.5px] border-y-[0.5px] border-crayola flex flex-col justify-between">
            <p className="uppercase">Brand guidelines development</p>
            <p className="">
              Consistent branding
              <br />
              <br />
              Craft a strong and memorable brand identity with our brand
              guidelines development. Ensure consistency across all brand
              elements, from colors to typography, establishing a cohesive and
              trustworthy brand presence.
            </p>
          </div>
          <div className="h-[30rem] lg:h-[50rem] p-6 lg:p-10 border-x-[0.5px] border-y-[0.5px] border-crayola flex flex-col justify-between">
            <p className="uppercase">Visual identity design</p>
            <p className="">
              Eye-catching visuals
              <br />
              <br />
              Elevate your brand with our visual identity design. From logos to
              graphics, our design team creates eye-catching visuals that
              reflect your brand personality, leaving a lasting impression on
              your audience.
            </p>
          </div>
          <div className="h-[30rem] lg:h-[50rem] p-6 lg:p-10 border-x-[0.5px] border-y-[0.5px] border-crayola flex flex-col justify-between">
            <p className="uppercase">CMS integration & customisation</p>
            <p className="">
              Easy website management
              <br />
              <br />
              Take control of your website effortlessly with our CMS integration
              and customization. Easily update and manage your website&apos;s
              content without technical hassles, ensuring it stays relevant and
              up-to-date.
            </p>
          </div>
        </div>
      </section>

      {/* New section starts */}
      <section className="py-40">
        <div className="grid xl:grid-cols-2 gap-20">
        <motion.img
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src="wudiweber-services.webp"
              alt="team image"
              className="shadow-xl hover:shadow-2xl"
            />
          <div className="grid content-between">
            <h2 className="text-gunmetal font-sourcecode font-light text-xl md:text-4xl py-32 xl:py-0">
              Creativity is what keeps Wudi & Weber going. We love pushing
              limits and thinking outside the box. Our creative approach is
              fueled by curiosity, a strong desire to develop unique ideas, and
              a commitment to doing great work. We&apos;re all about trying new
              things and encouraging our team to think differently, so we can
              always deliver awesome results.
            </h2>

            <div className="font-sourcecode py-32 xl:py-0 text-sm md:text-lg">
              <div>
                <p className="uppercase py-5">Collaborative partnership</p>
                <p>
                  We&apos;re always exploring new tech, ideas, and strategies to
                  give you top-notch solutions that set you apart from the
                  competition.
                </p>
              </div>
              <div>
                <p className="uppercase py-5">Innovation & creativity</p>
                <p>
                  We believe in building a strong partnership with our clients.
                  We work closely with you, valuing your input and feedback
                  every step of the way.
                </p>
              </div>
              <div>
                <p className="uppercase py-5">Commitment to quality</p>
                <p>
                  Making sure you&apos;re happy is our main goal. We go the
                  extra mile to make sure our clients are pleased with the
                  results. We&apos;re committed to providing exceptional
                  quality.
                </p>
              </div>
              <div>
                <p className="uppercase py-5">Expertise & experience</p>
                <p>
                  With lots of experience in the industry, our team brings a ton
                  of knowledge to the table. We have a proven track record of
                  delivering exceptional results.
                </p>
              </div>
              <div>
                <p className="uppercase py-5">Tailored solutions</p>
                <p>
                  We believe in understanding your unique needs and customizing
                  our solutions accordingly. Our approach is flexible to ensure
                  a perfect fit for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New section start */}
      <section>
        <div className="grid xl:grid-cols-2 border-y-[0.5px] border-crayola">
          <div className="grid content-around">
            <h2 className="font-vollkorn font-black text-crayola text-4xl lg:text-6xl lg:pr-64 py-10">
              Why our partners work with us
            </h2>
            <NavLink
              to="/contact"
              className="p-2 font-sourcecode text-xl w-[9rem] text-engviolet rounded-full hover:border-engviolet hover:border-2 border-2 border-engviolet hover:text-cosmiclatte hover:bg-engviolet transition-all duration-1000"
            >
              <span className="">Contact us</span>
            </NavLink>
          </div>

          <div className="h-82 grid content-evenly xl:border-l-[0.5px] border-crayola font-sourcecode divide-y-[0.5px] divide-crayola text-xl text-gunmetal">
            <p className="py-10 xl:px-12">
              We help your brand connect better with your audience by carefully
              choosing styles that send a strong message.
            </p>
            <p className="py-10 xl:px-12">
              We create cool stuff that&apos;s both creative and practical,
              using the best tech out there to make sure you get great results.
            </p>
            <p className="py-10 xl:px-12">
              We&apos;re always working to make things even better, aiming to
              deliver quality and giving you top-notch service every time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
