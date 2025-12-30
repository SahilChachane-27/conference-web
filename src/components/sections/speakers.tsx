
'use client';

import Image from 'next/image';
import { speakers } from '@/lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

export function Speakers() {
  return (
    <section id="speakers" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Keynote</span> Speakers
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            Invited talks by eminent academicians, industry experts, and technology leaders.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto space-y-4">
          {speakers.map((speaker, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <AccordionItem value={`item-${index}`} className="border-b-0">
                <AccordionTrigger className="p-6 text-left hover:no-underline group">
                    <div className="flex items-center gap-6">
                        <Image
                            src={speaker.image.imageUrl}
                            alt={`Portrait of ${speaker.name}`}
                            width={100}
                            height={100}
                            className="rounded-full object-cover h-24 w-24 border-4 border-transparent group-hover:border-primary/20 transition-colors"
                            data-ai-hint={speaker.image.imageHint}
                        />
                        <div className="flex-grow">
                            <h3 className="text-xl font-bold font-headline text-foreground">{speaker.name}</h3>
                            <p className="text-md text-primary font-semibold">{speaker.title}</p>
                            <p className="text-sm text-muted-foreground mt-1">{speaker.affiliation}</p>
                        </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-6 pb-6 text-muted-foreground text-sm prose max-w-none">
                    <p>{speaker.bio}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Card>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
