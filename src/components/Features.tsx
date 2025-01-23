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
      "Choose any country from around the globe and set up epic battles to see who will be the last nation standing! 🌍 Select from all real-world countries, each with unique strengths 💪, and fight until only one remains! 👑",
    image: image1,
  },
  {
    title: "Multiplayer Mode",
    description:
      "Test",
    image: image2,
  },
  {
    title: "Sandbox Mode",
    description:
      "Stay tuned for our expanding collection of innovative games and apps! 🚀 Our creative team is working on exciting new titles that will bring fresh challenges and unique experiences to our growing platform 🎮 ⭐️",
    image: image3,
  },
];

const featureList: string[] = [
  "Strategy",
  "Puzzle",
  "Action",
  "Battle Royal",
  "Geopolitics",
  "Minimalist",
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
