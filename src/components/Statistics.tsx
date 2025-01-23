export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "79K",
      description: "Play Store Installs",
    },
    {
      quantity: "149",
      description: "Player Countries",
    },
    {
      quantity: "98K",
      description: "TikTok Followers",
    },
    {
      quantity: "163M",
      description: "TikTok Views",
    },
    {
      quantity: "11M",
      description: "Instagram Views",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
