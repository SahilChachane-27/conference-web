
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const logos = [
    { src: "/College.png", alt: "Vasantdada Patil Pratishthan’s College of Engineering & Visual Arts" },
    { src: "/SDG.webp", alt: "Sustainable Development Goals" },
    { src: "/RC Updated.jpeg", alt: "Researcher Connect" },
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
        
        <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8">
                {logos.map((logo, index) => (
                    <Card key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-32 w-48">
                        <div className="relative h-full w-full">
                            <Image 
                                src={logo.src} 
                                alt={logo.alt} 
                                layout="fill"
                                objectFit="contain"
                                className="grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

    