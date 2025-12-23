import { contactInfo } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import * as Icons from 'lucide-react';

const Icon = ({ name, ...props }: { name: keyof typeof Icons } & React.ComponentProps<typeof Icons.Icon>) => {
    const LucideIcon = Icons[name] as React.ComponentType<any>;
    return <LucideIcon {...props} />;
};

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 space-y-4">
                <h2 className="font-headline text-4xl md:text-5xl font-bold">
                    Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                    We're here to help with any questions you may have. Reach out to us and we'll get back to you as soon as possible.
                </p>
            </div>
            <div className="md:col-span-3">
                <div className="space-y-6">
                {contactInfo.map((info) => (
                    <Card key={info.title} className="bg-muted/50 border-l-4 border-primary shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="flex flex-row items-center gap-4 p-4">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                                <Icon name={info.icon} className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle className='font-headline text-xl'>{info.title}</CardTitle>
                                <p className="text-muted-foreground text-sm whitespace-pre-line leading-relaxed">
                                    {info.value}
                                </p>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
