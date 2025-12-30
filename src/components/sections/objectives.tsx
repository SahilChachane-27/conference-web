import { objectives } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as Icons from "lucide-react";

const Icon = ({ name, ...props }: { name: keyof typeof Icons } & React.ComponentProps<typeof Icons.Icon>) => {
    const LucideIcon = Icons[name] as React.ComponentType<any>;
    if (!LucideIcon) {
        return <Icons.CheckCircle2 {...props} />;
    }
    return <LucideIcon {...props} />;
};

export function Objectives() {
  return (
    <section id="objectives" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Conference</span> Objectives
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            Our primary goals for fostering innovation and collaboration.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
                <Card key={index} className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center bg-card">
                    <CardContent className="p-8">
                        <div className="flex justify-center mb-4">
                            <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                <Icon name={objective.icon} className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold font-headline text-foreground mb-2">{objective.title}</h3>
                        <p className="text-muted-foreground text-sm">{objective.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
