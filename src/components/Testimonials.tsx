import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Memo",
    userName: "@memo",
    comment: "A good and wonderful game that I advise everyone to play",
  },
  {
    name: "Flyingbum077 And more",
    userName: "@flyingbum077",
    comment:
      "Played the hour it came out easy and fun to use. Can't wait for the online mode",
  },
  {
    name: "Servula Pacheco",
    userName: "@crazyking",
    comment:
      "Geofast is amazing, congratulations on the incredible work! Keep evolving the game!",
  },
  {
    name: "Mr Hot JupiterGC",
    userName: "@hot_jupiter",
    comment:
      "My friend actually played this game and introduced this game to me cuz we're both (geographic enthusiasts). It is a fun game too and thank you for creating this masterpiece.",
  },
  {
    name: "Jonathan Carbajal",
    userName: "@jonathan_carbajal",
    comment:
      "Very fun and addictive, I bought the sandbox pass 10 minutes in and I'm having lots of fun",
  },
  {
    name: "Jack",
    userName: "@jack_dunker",
    comment: "I was an og follower on TikTok",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Geofast: Battle of Nations
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Reviews{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Reviews from Google Play Store.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(({ name, userName, comment }: TestimonialProps) => (
          <Card
            key={userName}
            className="max-w-md md:break-inside-avoid overflow-hidden"
          >
            <CardHeader>
              <CardTitle className="text-lg">{name}</CardTitle>
              <CardDescription>{userName}</CardDescription>
            </CardHeader>

            <CardContent>{comment}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
