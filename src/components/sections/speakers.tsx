
'use client';

import Image from 'next/image';
import { speakers } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export function Speakers() {
  return (
    <section id="speakers" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Keynote</span> Speakers
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            Invited talks by eminent academicians, industry experts, and technology leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <Card key={index} className="group overflow-hidden text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative bg-muted/50">
                    <Image
                      src={speaker.image.imageUrl}
                      alt={`Portrait of ${speaker.name}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-64 grayscale group-hover:grayscale-0 transition-all duration-300"
                      data-ai-hint={speaker.image.imageHint}
                    />
                </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-headline">{speaker.name}</h3>
                <p className="text-sm text-primary font-semibold">{speaker.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{speaker.affiliation}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
