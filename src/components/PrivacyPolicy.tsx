import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLayoutEffect } from "react";

interface PolicySectionProps {
  title: string;
  content: string;
}

const policyData: PolicySectionProps[] = [
  {
    title: "Introduction",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Information We Collect",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus hendrerit nulla, non tincidunt justo condimentum vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed vehicula metus at nisi ullamcorper, in tempus leo rutrum.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc id eleifend tincidunt, nisl nunc tincidunt nunc, vitae aliquam nunc nunc vitae nunc. Nulla facilisi. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    title: "Information Sharing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Data Security",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id eleifend tincidunt, nisl nunc tincidunt nunc, vitae aliquam nunc nunc vitae nunc. Sed vehicula metus at nisi ullamcorper, in tempus leo rutrum.",
  },
  {
    title: "Your Rights",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
  },
  {
    title: "Changes to This Policy",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.",
  },
  {
    title: "Contact Us",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
  },
];

export const PrivacyPolicy = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section id="privacy-policy" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Privacy
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Policy{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground mb-8">
        Last updated: January 21, 2025
      </p>

      <div className="space-y-6">
        {policyData.map(({ title, content }: PolicySectionProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">{content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-muted-foreground text-center">
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:{" "}
          <a
            href="mailto:privacy@example.com"
            className="text-primary hover:underline"
          >
            privacy@example.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
