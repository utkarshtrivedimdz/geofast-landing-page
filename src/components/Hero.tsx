import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import tiktokIcon from "../assets/tiktok_green.webp";
import instagramIcon from "../assets/instagram_green.webp";
import youtubeIcon from "../assets/youtube_green.webp";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              TEST Innovating
            </span>{" "}
            the future
          </h1>{" "}
          of{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Mobile
            </span>{" "}
            gaming TEST
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          TESTESTEST Geofast Games is a cutting-edge game development studio, creating
          engaging and innovative mobile games. Our latest hit, Battle of
          Nations, has taken the word game market by storm.TESTESTEST
        </p>

        <a href="#newsletter">
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-full md:w-1/3">TESTEST</Button>
          </div>
        </a>

        {/* Social Media Icons */}
        <div className="flex justify-center lg:justify-start gap-6 mt-6">
          <a
            href="https://www.tiktok.com/@geofast_"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={tiktokIcon}
              alt="TikTok"
              className="h-10 w-10 object-contain"
            />
          </a>
          <a
            href="https://www.instagram.com/geofast_/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="h-10 w-10 object-contain"
            />
          </a>
          <a
            href="https://www.youtube.com/@geofast_"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={youtubeIcon}
              alt="YouTube"
              className="h-10 w-10 object-contain"
            />
          </a>
        </div>
      </div>

      {/* Hero cards section */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
