import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  //CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
//import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Game Developer",
    popular: 0,
    price: 0,
    description: "Create engaging gameplay",
    buttonText: "Apply Now",
    benefitList: [
      "1 Team member",
      "2 GB Storage",
      "Upto 4 pages",
      "Community support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "UI/UX Designer",
    popular: 1,
    price: 5,
    description: "Craft intuitive interfaces",
    buttonText: "Apply Now",
    benefitList: [
      "4 Team member",
      "4 GB Storage",
      "Upto 6 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "Marketing Specialist",
    popular: 0,
    price: 40,
    description: "Drive user acquisition",
    buttonText: "Apply Now",
    benefitList: [
      "10 Team member",
      "8 GB Storage",
      "Upto 10 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Join{" "}
        </span>
        the Geofast Team
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        We’re on the lookout for passionate and talented individuals to join our growing team.
        If you specialize in game development, gameplay writing, game art, marketing,
        or community management, we’d love to hear from you.
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
              {/** 
                
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>
                **/}

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>
            {/**


            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
            **/}
          </Card>
        ))}
      </div>
    </section>
  );
};
