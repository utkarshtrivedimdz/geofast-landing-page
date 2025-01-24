import { Statistics } from "./Statistics";
import Map from "../assets/map.webp"; // Import the WEBP image
import tiktokIcon from "../assets/tiktok_green.webp";
import instagramIcon from "../assets/instagram_green.webp";
import youtubeIcon from "../assets/youtube_green.webp";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12 relative">
        {/* Social Media Icons */}
        <div className="absolute top-4 right-4 flex gap-4">
          <a
            href="https://www.tiktok.com/@geofast_"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={tiktokIcon}
              alt="TikTok"
              className="h-8 w-8 object-contain"
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
              className="h-8 w-8 object-contain"
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
              className="h-8 w-8 object-contain"
            />
          </a>
        </div>

        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Geofast Games
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Geofast Games was founded in 2024 with a passion for creating unique and engaging gaming experiences.
                Our first game, <em>Geofast: Battle of Nations</em>, was released on the Google Play Store on December 7, 2024.
                Even before its release, the game went viral on TikTok and Instagram,
                where videos about it garnered millions of views, building a wave of anticipation. 
                This early excitement translated into a strong launch, with players from all over the world
                joining to form a very diverse community. While the game is still young,
                we're actively working on exciting new features to enhance the experience.
                Additionally, <em>Geofast: Battle of Nations</em> will soon be available on the Apple App Store,
                making it accessible to even more players worldwide.
              </p>
            </div>

            <Statistics />
          </div>
        </div>

        {/* Add the map image below the text */}
        <div className="flex justify-center mt-8">
          <img
            src={Map}
            alt="Map"
            className="w-full max-w-3xl rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
