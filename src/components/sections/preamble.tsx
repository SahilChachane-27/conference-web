
import { preamble } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Preamble() {
  const preambleImage = PlaceHolderImages.find(p => p.id === 'hero-1');

  return (
    <section id="preamble" className="relative py-20 md:py-28 overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/30 -z-10" aria-hidden="true" />
      <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square max-w-md mx-auto md:mx-0">
                {preambleImage && (
                    <Image 
                        src={preambleImage.imageUrl} 
                        alt="Sustainable Technology"
                        fill
                        className="rounded-xl shadow-2xl object-cover"
                        data-ai-hint={preambleImage.imageHint}
                    />
                )}
                <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
              </div>
              <div className="max-w-xl">
                  <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
                    {preamble.title}
                  </h2>
                  <div className="w-24 h-1 bg-primary/70 mt-4 rounded-full"></div>
                  <div className="text-lg text-foreground/80 leading-relaxed space-y-6 text-justify mt-6">
                      <p>
                        {preamble.content.split('. ').slice(0, 2).join('. ') + '.'}
                      </p>
                       <p>
                        {preamble.content.split('. ').slice(2).join('. ')}
                      </p>
                  </div>
                  <div className="mt-8">
                    <Button asChild>
                        <Link href="/about/conference">
                            Learn More
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}
