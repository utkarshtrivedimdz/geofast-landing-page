import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image1 from "../assets/singleplayer.webp";
import image2 from "../assets/multiplayer.webp";
import image3 from "../assets/sandbox.webp";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Single Player Mode",
    description:
      "Dominate the battleground in a quick battle, or embark on a campaign (coming soon)!",
    image: image1,
  },
  {
    title: "Multiplayer Mode",
    description:
      "Challenge friends locally on one device or compete online (coming soon)!",
    image: image2,
  },
  {
    title: "Sandbox Mode",
    description:
      "Create custom battles with adjustable nation strengths (Premium feature).",
    image: image3,
  },
];

const featureList: string[] = [
  "Battle Royal",
  "Geopolitics",
  "Strategy",
  "Minimalist",
  "Mobile",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Geofast:{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Battle of Nations
        </span>
      </h2>

      {/* Descriptive text under the title */}
      <p className="text-muted-foreground md:text-center text-lg mx-auto max-w-3xl">
        Pick a nation and conquer the world in a thrilling battle royale showdown!<br />
        In <em>Geofast: Battle of Nations</em>, choose any country from around the globe and set up
        epic battles to see who will be the last nation standing.
        Select from all real-world countries, each with unique strengths,
        and fight until only one remains!<br />
        Each country's power is based on real-world military strength,
        and strategy is key. Take turns firing, but if a country’s hearts are gone,
        the attacker gains an extra turn! Discover special shots like grenades,
        nukes, poison spells and revival spells to turn the tide.
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto rounded-xl"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

