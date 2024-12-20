

export function Features() {
  const features = [
    {
      title: 'MATCHEZ',
      description: 'Assemblez votre équipe musicale de rêve'
    },
    {
      title: 'COLLABOREZ',
      description: 'Réalisez des projets musicaux collaboratifs qui vous ressemblent'
    },
    {
      title: 'VIVEZ L EXPÉRIENCE',
      description: 'Participez à des projets musicaux inédits'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-2">
      <div className="grid gap-8 max-w-md mx-auto">
        {features.map((feature) => (
          <div key={feature.title} className="bg-white 900 p-6 rounded-xl">
            <h3 className="text-xl text-gray-600 font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}