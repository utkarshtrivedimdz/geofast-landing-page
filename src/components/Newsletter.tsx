import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import supportIcon from "../assets/support.webp";
import businessIcon from "../assets/business.webp";

export const Contact = () => {
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

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Questions Card */}
          <Card className="relative bg-muted/50">
            <img
              src={supportIcon}
              alt="Support"
              className="absolute top-4 right-4 h-12 w-12"
            />
            <CardHeader>
              <CardTitle className="text-2xl">Questions?</CardTitle>
              <CardDescription>
                Have a question or need assistance? We're here to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:help@geofastgames.com?subject=Support Request"
                className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary/80 transition inline-block"
              >
                Support
              </a>
            </CardContent>
          </Card>

          {/* Business Opportunities Card */}
          <Card className="relative bg-muted/50">
            <img
              src={businessIcon}
              alt="Business Opportunities"
              className="absolute top-4 right-4 h-12 w-12"
            />
            <CardHeader>
              <CardTitle className="text-2xl">Business Opportunities</CardTitle>
              <CardDescription>
                We are actively looking for investors and business partners to
                grow our vision.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:help@geofastgames.com?subject=Business Inquiry"
                className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary/80 transition inline-block"
              >
                Business Inquiries
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
