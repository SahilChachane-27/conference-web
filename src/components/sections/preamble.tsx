
import { preamble } from "@/lib/data";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Preamble() {
  const preambleImage = PlaceHolderImages.find(p => p.id === 'hero-1');

  return (
    <section id="preamble" className="relative py-20 md:py-28 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] max-w-md mx-auto md:mx-0">    
                <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
                 <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/5 rounded-lg -z-10"></div>
              </div>
              <div className="max-w-xl text-center md:text-left">
                  <h2 className="font-headline text-4xl md:text-5xl font-bold">
                    <span className="text-primary">{preamble.title}</span> of the Conference
                  </h2>
                  <div className="w-24 h-1.5 bg-primary mt-4 mb-6 rounded-full mx-auto md:mx-0"></div>
                  <div className="text-muted-foreground leading-relaxed space-y-4 text-justify">
                      <p>
                        {preamble.content.split('. ').slice(0, 2).join('. ') + '.'}
                      </p>
                       <p>
                        {preamble.content.split('. ').slice(2).join('. ')}
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}
