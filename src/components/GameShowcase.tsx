import { Badge } from "./ui/badge";
import image_appstore from "../assets/appstore.webp";
import image_playstore from "../assets/playstore.webp";
import appIcon from "../assets/playstore_logo.png";

import screenshot1 from "../assets/screenshot_1.webp";
import screenshot2 from "../assets/screenshot_2.webp";
import screenshot3 from "../assets/screenshot_3.webp";
import screenshot4 from "../assets/screenshot_4.webp";
import screenshot5 from "../assets/screenshot_5.webp";
import screenshot6 from "../assets/screenshot_6.webp";

const screenshots = [
  { src: screenshot1, alt: "Fight For Your Country" },
  { src: screenshot2, alt: "Conquer The World Map" },
  { src: screenshot3, alt: "Unlock Powerful Weapons" },
  { src: screenshot4, alt: "Lead Your Nation To Victory" },
  { src: screenshot5, alt: "Battle Players Worldwide" },
  { src: screenshot6, alt: "Collect Exclusive Skins" },
];

const featureList: string[] = [
  "Battle Royale",
  "Online Multiplayer",
  "Strategy",
  "Mobile",
];

export const GameShowcase = () => {
  return (
    <section id="battleofnations" className="container py-24 sm:py-32 space-y-8">
      {/* App Icon and Title */}
      <div className="text-center">
        <img
          src={appIcon}
          alt="Geofast App Icon"
          className="w-32 h-32 mx-auto rounded-2xl mb-6"
        />
        <h2 className="text-3xl lg:text-4xl font-bold">
          Geofast:{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Battle of Nations
          </span>
        </h2>
      </div>

      {/* Descriptive text under the title */}
      <p className="text-muted-foreground md:text-center text-lg mx-auto max-w-3xl">
        Pick a nation and dominate the battlefield in online multiplayer combat! Battle players worldwide in strategic turn-based showdowns. Unlock powerful weapons, upgrade your arsenal, and climb the global rankings.
      </p>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      {/* App Store and Play Store Buttons */}
      <div className="flex justify-center gap-8 mt-8">
        <a
          href="https://play.google.com/store/apps/details?id=com.geofast.geofastbattleofnations&utm_source=website&utm_medium=organic&utm_campaign=showcase"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={image_playstore}
            alt="Get it on Google Play"
            className="h-12 object-contain"
          />
        </a>
        <a
          href="https://apps.apple.com/app/geofast-battle-of-nations/id6740595527?ct=website-showcase"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={image_appstore}
            alt="Download on the App Store"
            className="h-12 object-contain"
          />
        </a>
      </div>

      {/* Screenshot gallery — horizontal scroll on mobile, 3-col grid on desktop */}
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
        {screenshots.map(({ src, alt }) => (
          <img
            key={alt}
            src={src}
            alt={alt}
            className="snap-center flex-shrink-0 w-[220px] md:w-full rounded-2xl shadow-lg"
          />
        ))}
      </div>
    </section>
  );
};
