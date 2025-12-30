
import Image from 'next/image';

const logos = [
    { src: "/college.png", alt: "Vasantdada Patil Pratishthan’s College of Engineering & Visual Arts" },
    { src: "/SDG.webp", alt: "Sustainable Development Goals" },
    { src: "/RC_Updated.jpeg", alt: "Researcher Connect" },
    { src: "/google_scholar.png", alt: "Google Scholar" },
    { src: "/Elsevier.png", alt: "Elsevier" },
    { src: "/scopus.png", alt: "Scopus" },
    { src: "/logo3.png", alt: "Springer" },
    { src: "/webofscience.png", alt: "Web of Science" },
    { src: "/ieee.png", alt: "IEEE" },
    { src: "/acm.png", alt: "ACM" },
    { src: "/wiley.png", alt: "Wiley" },
];

export function Organizers() {
  return (
    <section id="organizers" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Our</span> Organizers & Collaborators
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            Proudly organized and supported by the following institutions.
          </p>
        </div>
        
        <div className="relative w-full overflow-hidden bg-background py-8">
            <div className="flex animate-marquee">
                {[...logos, ...logos].map((logo, index) => (
                    <div key={index} className="flex-shrink-0 mx-8" style={{ width: '160px' }}>
                        <div className="relative aspect-[3/2] h-20 mx-auto">
                            <Image 
                                src={logo.src} 
                                alt={logo.alt} 
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
