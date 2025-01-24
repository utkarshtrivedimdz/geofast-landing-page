import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Importing role-specific icons
import developerIcon from "../assets/developer.webp";
import gameplayIcon from "../assets/gameplay.webp";
import artistIcon from "../assets/artist.webp";
import marketingIcon from "../assets/marketing.webp";
import communityIcon from "../assets/community.webp";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  description: string;
  buttonText: string;
  icon: string; // New property for role-specific icon
}

const pricingList: PricingProps[] = [
  {
    title: "Game Developer",
    popular: PopularPlanType.NO,
    description: "Develop engaging gameplay and mechanics for our games.",
    buttonText: "Apply Now",
    icon: developerIcon, // Icon for Game Developer
  },
  {
    title: "Gameplay Writer",
    popular: PopularPlanType.NO,
    description: "Design exciting new gameplay features.",
    buttonText: "Apply Now",
    icon: gameplayIcon, // Icon for Gameplay Writer
  },
  {
    title: "Game Artist",
    popular: PopularPlanType.NO,
    description: "Create skins, effects, and visuals to bring our games to life.",
    buttonText: "Apply Now",
    icon: artistIcon, // Icon for Game Artist
  },
  {
    title: "Marketing Specialist",
    popular: PopularPlanType.NO,
    description: "Drive user acquisition and manage marketing campaigns.",
    buttonText: "Apply Now",
    icon: marketingIcon, // Icon for Marketing Specialist
  },
  {
    title: "Community Manager",
    popular: PopularPlanType.NO,
    description: "Engage with players and manage our social media presence.",
    buttonText: "Apply Now",
    icon: communityIcon, // Icon for Community Manager
  },
];

export const Pricing = () => {
  return (
    <section id="careers" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Join{" "}
        </span>
        the Team
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        We’re on the lookout for passionate and talented professionals to join our growing team.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader className="relative">
              {/* Add the icon in the top-right corner */}
              <img
                src={pricing.icon}
                alt={`${pricing.title} icon`}
                className="absolute top-2 right-2 h-8 w-8"
              />
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
