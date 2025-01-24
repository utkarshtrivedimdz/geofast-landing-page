import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import supportIcon from "../assets/support.webp";
import businessIcon from "../assets/business.webp";

export const Newsletter = () => {
  return (
    <section id="contact">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32 text-center">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Contact{" "}
          </span>
          Us
        </h3>

        <div className="grid gap-8 mt-12 mx-auto md:w-[600px]">
          {/* Questions Card */}
          <Card className="relative bg-muted/50 drop-shadow-xl shadow-black/10">
            <img
              src={supportIcon}
              alt="Support"
              className="absolute top-4 right-4 h-10 w-10"
            />
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Support</CardTitle>
              <CardDescription className="text-muted-foreground">
                Have a question or need assistance? We're here to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:help@geofastgames.com?subject=Support Request"
                className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-primary/80 transition inline-block"
              >
                Reach Out
              </a>
            </CardContent>
          </Card>

          {/* Business Opportunities Card */}
          <Card className="relative bg-muted/50 drop-shadow-xl shadow-black/10">
            <img
              src={businessIcon}
              alt="Business Opportunities"
              className="absolute top-4 right-4 h-10 w-10"
            />
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Business Inquiries</CardTitle>
              <CardDescription className="text-muted-foreground">
                We are actively looking for investors and business partners to grow our vision.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:help@geofastgames.com?subject=Business Inquiry"
                className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-primary/80 transition inline-block"
              >
                Reach Out
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
