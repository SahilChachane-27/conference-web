
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { speakers } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function HomeSpeakers() {
  const featuredSpeakers = speakers.slice(0, 4);

  return (
    <section id="speakers" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Featured</span> Speakers
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            Meet some of the brilliant minds who will be sharing their insights at SustainTechCon 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredSpeakers.map((speaker, index) => (
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

        <div className="text-center mt-16">
            <Button asChild size="lg" variant="outline">
                <Link href="/speakers">
                    View All Speakers
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
