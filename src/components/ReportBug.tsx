import GoogleFormIntegration from "./GoogleFormIntegration";

export const ReportBugPage = () => {
  return (
    <GoogleFormIntegration
      formUrl="https://docs.google.com/forms/d/e/1FAIpQLScNO8Cct6dusU_A1kd0JVeERB2YjFXMQ3GjOmtEq1ojRftgxA/viewform"
      title="Report Bug Form"
      description="We will fix it soon!"
    />
  );
};
