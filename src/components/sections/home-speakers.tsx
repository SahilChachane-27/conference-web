
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { speakers } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HomeSpeakers() {
  const featuredSpeakers = speakers.slice(0, 4);

  return (
    <section id="speakers" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Speakers
            </h2>
            <Button asChild variant="link" className="text-primary">
                <Link href="/speakers">
                    View all speakers
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredSpeakers.map((speaker, index) => (
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
