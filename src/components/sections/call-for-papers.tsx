
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { callForPapers } from "@/lib/data";
import { FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const trackIcons: { [key: string]: React.ElementType } = {
    "Track 1": FileText,
    "Track 2": FileText,
    "Track 3": FileText,
    "Track 4": FileText,
    "Track 5": FileText,
    "Track 6": FileText,
    "Track 7": FileText,
    "Track 8": FileText,
    "Track 9": FileText,
    "Track 10": FileText,
};

export function CallForPapers() {
  return (
    <section id="papers" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Call for <span className="text-primary">Papers</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            {callForPapers.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Conference Tracks Accordion */}
            <div className="w-full">
            <Accordion type="single" collapsible className="w-full">
                {callForPapers.tracks.map((track, index) => {
                const Icon = trackIcons[`Track ${index + 1}`] || FileText;
                return (
                    <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:no-underline">
                        <div className="flex items-center gap-4 text-lg font-headline">
                            <div className="bg-primary/10 p-3 rounded-lg">
                                <Icon className="h-5 w-5 text-primary" />
                            </div>
                            {track.title}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="space-y-2 pl-16 pr-4 pt-2">
                        {track.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary/80 mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{topic}</span>
                            </li>
                        ))}
                        </ul>
                    </AccordionContent>
                    </AccordionItem>
                );
                })}
            </Accordion>
            </div>

            {/* Submission Guidelines */}
            <div className="sticky top-28 h-fit">
                <Card className="shadow-lg">
                <CardHeader>
                    <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                        <FileText className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                        <CardTitle className="font-headline text-2xl">Submission Guidelines</CardTitle>
                        <CardDescription>How to submit your paper for SustainTechCon 2026.</CardDescription>
                    </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                    {callForPapers.submissionDetails.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full sm:w-auto" size="lg">
                        <Link href="#">
                            Submit Paper (Portal Closed)
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
                </Card>
            </div>
        </div>

      </div>
    </section>
  );
}
