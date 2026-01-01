
import { preamble } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function Preamble() {
  const preambleImage = PlaceHolderImages.find(p => p.id === 'hero-1');

  return (
    <section id="preamble" className="relative py-20 md:py-28 text-white">
      {preambleImage && (
        <Image
          src={preambleImage.imageUrl}
          alt={preambleImage.description}
          fill
          className="object-cover"
          data-ai-hint={preambleImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-background/80 backdrop-blur-sm border-white/20 text-foreground">
            <CardHeader>
              <CardTitle className="font-headline text-4xl md:text-5xl font-bold text-center">
                {preamble.title} of the Conference
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-muted-foreground leading-relaxed space-y-4 text-justify text-lg">
                <p>
                  {preamble.content.split('. ').slice(0, 2).join('. ') + '.'}
                </p>
                <p>
                  {preamble.content.split('. ').slice(2).join('. ')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
