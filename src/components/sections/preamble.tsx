import { preamble } from "@/lib/data";

export function Preamble() {
  return (
    <section id="preamble" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            {preamble.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-center">
            {preamble.content}
        </p>
      </div>
    </section>
  );
}
