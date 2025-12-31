
import Image from 'next/image';

const logos = [
    { src: "/RClogo.webp", alt: "Researcher Connect" },
    { src: "/VPPCOE_logo.png", alt: "VPPCOE & VA" },
    { src: "/logo-ias.png", alt: "IAS" },
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
        
        <div className="flex flex-wrap justify-center items-center gap-16">
            {logos.map((logo, index) => (
                <div key={index} className="relative h-24 w-48">
                    <Image 
                        src={logo.src} 
                        alt={logo.alt} 
                        fill
                        className="object-contain"
                    />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
