import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const generateRealPhoto = (id: number) =>
  `https://randomuser.me/api/portraits/men/${id}.jpg`;

const testimonials: TestimonialProps[] = [
  {
    image: generateRealPhoto(1),
    name: "Memo",
    userName: "@memo",
    comment: "A good and wonderful game that I advise everyone to play",
  },
  {
    image: generateRealPhoto(3),
    name: "Flyingbum077 And more",
    userName: "@flyingbum077",
    comment:
      "Played the hour it came out easy and fun to use. Can't wait for the online mode",
  },
  {
    image: generateRealPhoto(4),
    name: "Servula Pacheco",
    userName: "@crazyking",
    comment:
      "Geofast is amazing, congratulations on the incredible work! Keep evolving the game!",
  },
  {
    image: generateRealPhoto(2),
    name: "Mr Hot JupiterGC",
    userName: "@hot_jupiter",
    comment:
      "My friend actually played this game and introduced this game too me cuz were both (geographic enthusiasts) it is a fun game too and thank you for creating this masterpiece",
  },
  {
    image: generateRealPhoto(5),
    name: "Jonathan Carbajal",
    userName: "@jonathan_carbajal",
    comment:
      "Very fun and addictive, I bought the sandbox pass 10 minutes in and I'm having lots of fun",
  },
  {
    image: generateRealPhoto(6),
    name: "Jack",
    userName: "@jack_dunker",
    comment: "I was an og follower on tick tock",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <em>Geofast: Battle of Nations</em>
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Reviews{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Reviews from Google Play Store.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  {image ? (
                    <AvatarImage
                      alt={name}
                      src={image}
                    />
                  ) : (
                    <AvatarFallback>{name[0]}</AvatarFallback>
                  )}
                </Avatar>
                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
