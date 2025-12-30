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
    <section id="objectives" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Conference</span> Objectives
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            Our primary goals for fostering innovation and collaboration.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
            {objectives.map((objective, index) => (
                <Card key={index} className="group transition-all duration-300 hover:bg-primary/5 hover:shadow-lg hover:border-primary/30">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-6">
                            <div className="bg-primary/10 p-4 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                <Icon name={objective.icon} className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold font-headline text-foreground mb-1">{objective.title}</h3>
                                <p className="text-muted-foreground">{objective.description}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
