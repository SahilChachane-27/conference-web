import { objectives } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export function Objectives() {
  return (
    <section id="objectives" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Conference</span> Objectives
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Our primary goals for fostering innovation and collaboration.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                    <p className="text-muted-foreground">{objective}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
