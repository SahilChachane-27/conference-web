
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { speakers } from '@/lib/data';

export function Speakers() {
  return (
    <section id="speakers" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Keynote</span> Speakers
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Invited talks by eminent academicians, industry experts, and technology leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-block mb-4">
                <Image
                  src={speaker.image.imageUrl}
                  alt={`Portrait of ${speaker.name}`}
                  width={160}
                  height={160}
                  className="rounded-full object-cover h-40 w-40"
                  data-ai-hint={speaker.image.imageHint}
                />
              </div>
              <h3 className="text-xl font-bold font-headline">{speaker.name}</h3>
              <p className="text-sm text-primary">{speaker.title}</p>
              <p className="text-sm text-muted-foreground mt-1">{speaker.affiliation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
