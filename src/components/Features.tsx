import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/ingredients.png";
import image3 from "../assets/wordle.webp";
import image4 from "../assets/battleOfNationsPreview.webp";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Battle of Nations",
    description:
      "Choose any country from around the globe and set up epic battles to see who will be the last nation standing! 🌍 Select from all real-world countries, each with unique strengths 💪, and fight until only one remains! 👑",
    image: image4,
  },
  {
    title: "Wordle Wizard",
    description:
      "A supercharged version called Wordle Wizard that takes wordle we love to the next level! 🎮✨ It's got everything we wished the original had PowerUps, Leaderboards to compete with friends 🏆 Daily challenges to keep it fresh 🎯",
    image: image3,
  },
  {
    title: "Cooking Many More",
    description:
      "Stay tuned for our expanding collection of innovative games and apps! 🚀 Our creative team is working on exciting new titles that will bring fresh challenges and unique experiences to our growing platform 🎮 ⭐️",
    image: image,
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
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Games
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
