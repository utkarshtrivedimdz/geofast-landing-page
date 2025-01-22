import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLayoutEffect } from "react";

interface PolicySectionProps {
  title: string;
  content: React.ReactNode;
}

const policyData: PolicySectionProps[] = [
  {
    title: "Introduction",
    content: (
      <div>
        Welcome to Geofast: Battle of Nations, developed by Geofast. This
        Privacy Policy explains what types of information may be collected when
        you use our game and how this information is handled.
        <br />
        <br />
        We value your privacy and want to ensure transparency about any data
        related to your use of our app.
      </div>
    ),
  },
  {
    title: "Information Collection and Use",
    content: (
      <div>
        Geofast: Battle of Nations does not directly collect or store any personal data. 
        However, third-party services integrated into the game may collect limited data for specific purposes:
        <br />
        <br />
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>AdMob</strong> - We use AdMob for interstitial ads within the
            game, which may collect analytics information for ad-related
            purposes. AdMob is operated by Google.
          </li>
          <li>
            <strong>Google Play Store</strong> - The Google Play Store may
            collect data necessary for in-app purchases. Geofast does not access
            or store this data.
          </li>
           <li>
            <strong>Apple App Store</strong> - The App Store may
            collect data necessary for in-app purchases. Geofast does not access
            or store this data.
          </li>
        </ol>
        <br />
        Your game progress is stored locally
        on your device. We do not have access to or control over this data.
      </div>
    ),
  },
  {
    title: "Permissions Used",
    content: (
      <div>
        Our app requests the following permissions:
        <br />
        <br />
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Access Network State</strong> - to check if there is an
            internet connection available.
          </li>
          <li>
            <strong>Internet</strong> - to load ads and handle in-app purchases.
          </li>
          <li>
            <strong>Billing Service</strong> - to facilitate in-app purchases
            through the Google Play billing service.
          </li>
        </ol>
      </div>
    ),
  },
  {
    title: "Children's Privacy",
    content: (
      <div>
        Geofast: Battle of Nations may display age restrictions on the Google
        Play Store and the Apple App Store, which vary based on regional regulations.
        <br />
        <br />
        We encourage parents to monitor children's activities online to ensure a
        safe experience.
        <br />
        <br />
        Please note that this app includes ads and in-app purchases.
      </div>
    ),
  },
  {
    title: "Data Security",
    content: (
      <div>
        Geofast does not store any personal data on its own servers as we do not
        collect data ourselves.
        <br />
        <br />
        Data related to ads and in-app purchases may be collected by AdMob, 
        Google Play Store, and the Apple App Store under their respective 
        privacy policies.
      </div>
    ),
  },
  {
    title: "Changes to this Privacy Policy",
    content: (
      <div>
        We may update this policy to reflect changes in our practices or legal
        requirements.
        <br />
        <br />
        Any updates will be posted on this page, so please check back
        periodically.
      </div>
    ),
  },
];

export const PrivacyPolicy = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section id="privacy-policy" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Geofast: Battle of Nations
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Privacy Policy{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground mb-8">
        Last updated: January 23, 2025
      </p>

      <div className="space-y-6">
        {policyData.map(({ title, content }: PolicySectionProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-muted-foreground text-lg">{content}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-muted-foreground text-center">
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:{" "}
          <a
            href="mailto:help@geofastgames.com"
            className="text-primary hover:underline"
          >
            help@geofastgames.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
