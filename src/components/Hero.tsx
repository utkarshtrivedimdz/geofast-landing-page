import { HeroCards } from "./HeroCards";
import tiktokIcon from "../assets/tiktok_green.webp";
import instagramIcon from "../assets/instagram_green.webp";
import youtubeIcon from "../assets/youtube_green.webp";
import playstoreIcon from "../assets/playstore2.webp";
import appstoreIcon from "../assets/appstore2.webp";
import revivalIcon from "../assets/revivalb.webp";
import grenadeIcon from "../assets/grenadeb.webp";
import heartIcon from "../assets/heartb.webp";
import poisonIcon from "../assets/poisonb.webp";
import allianceIcon from "../assets/alliance2b.webp";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-start space-y-6">
        {/* New Icon Row */}
        <div className="flex justify-start gap-6">
          <img
            src={revivalIcon}
            alt="Revival"
            className="h-10 w-10 object-contain opacity-50 hover:opacity-100 transition"
          />
          <img
            src={grenadeIcon}
            alt="Grenade"
            className="h-10 w-10 object-contain opacity-50 hover:opacity-100 transition"
          />
          <img
            src={heartIcon}
            alt="Heart"
            className="h-10 w-10 object-contain opacity-50 hover:opacity-100 transition"
          />
          <img
            src={poisonIcon}
            alt="Poison"
            className="h-10 w-10 object-contain opacity-50 hover:opacity-100 transition"
          />
          <img
            src={allianceIcon}
            alt="Alliance"
            className="h-10 w-10 object-contain opacity-50 hover:opacity-100 transition"
          />
        </div>


        {/* Title */}
        <main className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Accessible
            </span>{" "}
            Gaming,
          </h1>
          <br />
          Unlimited{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Fun
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 lg:mx-0">
          <b>Geofast Games</b> is a game development studio based in Belgium,
          creating engaging mobile games designed for players from all over the world.
          Our goal is to develop games accessible to everyone, regardless of experience or language.
          Our first mobile game, <em>Geofast: Battle of Nations</em>, had a strong and successful launch,
          capturing the interest of players globally.
        </p>

        {/* Store Icons */}
        <div className="flex justify-start gap-6 mt-8">
          <a
            href="https://play.google.com/store/apps/dev?id=7184241621050076321"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={playstoreIcon}
              alt="Play Store"
              className="h-10 w-10 object-contain"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/dev?id=7184241621050076321"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={appstoreIcon}
              alt="App Store"
              className="h-10 w-10 object-contain"
            />
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-start gap-6 mt-6">
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
