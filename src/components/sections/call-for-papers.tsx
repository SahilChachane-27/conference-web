
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { callForPapers } from "@/lib/data";
import { FileText, BookOpenCheck, ListChecks, Landmark, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Conference Themes */}
          <div className="lg:col-span-2 space-y-4">
             <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <ListChecks className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">Conference Tracks</CardTitle>
                </div>
              </CardHeader>
            </Card>

            <Accordion type="single" collapsible className="w-full space-y-4">
                {callForPapers.tracks.map((track, index) => (
                    <Card key={index} className="shadow-md hover:shadow-xl transition-shadow duration-300">
                        <AccordionItem value={`item-${index}`} className="border-b-0">
                            <AccordionTrigger className="p-6 text-lg font-semibold hover:no-underline">
                                {track.title}
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="px-6 pb-6">
                                    <ul className="space-y-2 mb-4">
                                        {track.topics.map((topic, topicIndex) => (
                                            <li key={topicIndex} className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                                                <span className="text-muted-foreground text-sm">{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-muted/50 p-4 rounded-md">
                                        <p className="font-semibold text-primary text-xs flex items-center gap-2">
                                            <Landmark className="h-4 w-4" />
                                            Relevant SDGs: <span className="font-normal text-muted-foreground">{track.sdgs}</span>
                                        </p>
                                        <p className="text-xs text-muted-foreground/80 mt-1 italic">{track.explanation}</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>
                ))}
            </Accordion>
          </div>

          {/* Submission and Publication Details */}
          <div className="lg:col-span-1 space-y-8 sticky top-24">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">Submission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {callForPapers.submissionDetails.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                 <Button asChild variant="outline" className="w-full mt-6">
                    <Link href="#">
                        Submit Paper (Link disabled)
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}
