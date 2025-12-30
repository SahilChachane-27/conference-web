import { preamble } from "@/lib/data";

export function Preamble() {
  return (
    <section id="preamble" className="py-20 md:py-28 bg-gradient-to-br from-background via-muted/50 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative flex justify-center items-center">
          <div className="relative bg-background/80 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-12 md:p-20 shadow-2xl max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
                {preamble.title}
              </h2>
              <div className="w-24 h-1 bg-primary/70 mx-auto mt-4 rounded-full"></div>
            </div>
            <p className="text-lg text-foreground/80 text-center leading-relaxed">
              {preamble.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
