import { preamble } from "@/lib/data";

export function Preamble() {
  return (
    <section id="preamble" className="relative py-20 md:py-28 overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                  <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
                  {preamble.title}
                  </h2>
                  <div className="w-24 h-1 bg-primary/70 mx-auto mt-4 rounded-full"></div>
              </div>
              <div className="text-lg text-foreground/80 leading-relaxed space-y-6 text-justify">
                  <p>
                    {preamble.content.split('. ').slice(0, 2).join('. ') + '.'}
                  </p>
                   <p>
                    {preamble.content.split('. ').slice(2).join('. ')}
                  </p>
              </div>
          </div>
      </div>
    </section>
  );
}
