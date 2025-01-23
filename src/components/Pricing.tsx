import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  description: string;
  buttonText: string;
}

const pricingList: PricingProps[] = [
  {
    title: "Game Developer",
    popular: PopularPlanType.NO,
    description: "Develop engaging gameplay and mechanics for our games.",
    buttonText: "Apply Now",
  },
  {
    title: "Gameplay Writer",
    popular: PopularPlanType.NO,
    description: "Design gameplay features and improve the player experience.",
    buttonText: "Apply Now",
  },
  {
    title: "Game Artist",
    popular: PopularPlanType.NO,
    description: "Create skins, effects, and visuals to bring our games to life.",
    buttonText: "Apply Now",
  },
  {
    title: "Marketing Specialist",
    popular: PopularPlanType.NO,
    description: "Drive user acquisition and manage marketing campaigns.",
    buttonText: "Apply Now",
  },
  {
    title: "Community Manager",
    popular: PopularPlanType.NO,
    description: "Engage with players and manage our social media presence.",
    buttonText: "Apply Now",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Join the
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Geofast Team{" "}
        </span>
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
            <CardHeader>
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
