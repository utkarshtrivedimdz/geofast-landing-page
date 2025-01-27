import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";

interface GoogleFormProps {
  formUrl: string;
  title?: string;
  description?: string;
  height?: number;
}

const GoogleFormIntegration: React.FC<GoogleFormProps> = ({
  formUrl,
  title = "Feedback Form",
  description = "Please provide your feedback",
  height = 800,
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Validate the Google Form URL
  const isValidGoogleFormUrl = (url: string): boolean => {
    try {
      const formUrl = new URL(url);
      return (
        formUrl.hostname === "docs.google.com" &&
        formUrl.pathname.includes("/forms/")
      );
    } catch {
      return false;
    }
  };

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Check URL validity on mount
  React.useEffect(() => {
    if (!isValidGoogleFormUrl(formUrl)) {
      setError(
        "Invalid Google Form URL. Please provide a valid Google Forms URL."
      );
      setIsLoading(false);
    }
  }, [formUrl]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {error ? (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          <>
            {isLoading && <Skeleton className="w-full h-96" />}
            <iframe
              src={`${formUrl}?embedded=true`}
              width="100%"
              height={height}
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              onLoad={handleIframeLoad}
              style={{ display: isLoading ? "none" : "block" }}
              title="Google Form"
            >
              Loading form...
            </iframe>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default GoogleFormIntegration;

// Usage example:
/*
import GoogleFormIntegration from './GoogleFormIntegration';

const MyFeedbackPage = () => {
  return (
    <div className="container mx-auto p-4">
      <GoogleFormIntegration
        formUrl="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
        title="Customer Feedback"
        description="We value your feedback! Please take a moment to fill out this form."
        height={800}
      />
    </div>
  );
};
*/
