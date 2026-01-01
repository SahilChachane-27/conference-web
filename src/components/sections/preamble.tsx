
import { preamble } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function Preamble() {
  return (
    <section id="preamble" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-background text-foreground shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-4xl md:text-5xl font-bold text-center underline underline-offset-8 decoration-primary">
                <span className="text-primary">{preamble.title}</span> of the Conference
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
