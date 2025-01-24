import { Statistics } from "./Statistics";
import pieChart from "../assets/pie.webp"; // Import the WEBP image

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
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
                Geofast Games was founded in December 2024 with a passion for creating unique and engaging gaming experiences.
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

        {/* Add the pie chart image below the text */}
        <div className="flex justify-center mt-8">
          <img
            src={pieChart}
            alt="Pie chart showing audience by country"
            className="w-full max-w-3xl rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
