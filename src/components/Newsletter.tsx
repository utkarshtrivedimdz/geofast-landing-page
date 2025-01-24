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

        {/* Support Section */}
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Questions about Geofast Games?</h3>
            <p className="text-muted-foreground mt-2">
              Have a question or need assistance? We're here to help.
            </p>
            <div className="mt-4">
              <a
                href="mailto:help@geofastgames.com?subject=Support Request"
                className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary/80 transition"
              >
                Support
              </a>
            </div>
          </div>

          {/* Business Section */}
          <div>
            <h3 className="text-xl font-semibold">Business Opportunities</h3>
            <p className="text-muted-foreground mt-2">
              We are actively looking for investors and business partners to grow our vision.
            </p>
            <div className="mt-4">
              <a
                href="mailto:help@geofastgames.com?subject=Business Inquiry"
                className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary/80 transition"
              >
                Business Inquiries
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
