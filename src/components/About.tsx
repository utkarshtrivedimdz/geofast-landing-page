import { Statistics } from "./Statistics";
import Map from "../assets/map.webp"; // Import the WEBP image
import GeofastLogo from "../assets/geofast_round.webp"; // Import your logo

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        {/* Add the company logo */}
        <div className="flex justify-center">
          <img
            src={GeofastLogo}
            alt="Geofast Logo"
            className="w-32 h-32 md:w-40 md:h-40 object-contain mb-8"
          />
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
              Geofast Games was founded in 2024 with a passion for creating engaging gaming experiences for a global audience.
              Our first game, Geofast: Battle of Nations, was released on the Google Play Store on December 7, 2024, and is now also available on the Apple App Store.
              Even before its release, the game went viral on TikTok and Instagram, where videos garnered millions of views and built a wave of anticipation.
              This early excitement translated into a strong launch, with players from all over the world joining to form a vibrant and diverse community.
              Since launch, we've continued expanding the experience—most recently with the addition of full online multiplayer, allowing players to battle friends and rivals across the globe in real time.
              Geofast: Battle of Nations is still just getting started, and we’re actively working on even more features, content, and updates to keep the war raging!
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
