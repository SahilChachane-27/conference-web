
import Image from 'next/image';

const logos = [
    { src: "/RClogo.webp", alt: "Researcher Connect", width: 192 },
    { src: "/VPPCOE_logo.png", alt: "VPPCOE & VA", width: 128 },
    { src: "/logo-ias.png", alt: "IAS", width: 128 },
    { src: "/Elsevier.png", alt: "Elsevier", width: 192 },
    { src: "/logo3.png", alt: "Springer", width: 192 },
    { src: "/taylor-and-francis.png", alt: "Taylor & Francis", width: 192 },
    { src: "/iet.png", alt: "IET", width: 128 },
    { src: "/inderscience.png", alt: "InderScience", width: 192 },
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
        
        <div className="relative w-full overflow-hidden bg-background">
            <div className="flex animate-marquee">
                {[...logos, ...logos].map((logo, index) => (
                    <div key={index} className="flex-shrink-0 mx-8" style={{ width: `${logo.width}px` }}>
                        <div className="relative h-20">
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
