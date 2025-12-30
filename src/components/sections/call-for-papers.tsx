
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
          <div className="lg:col-span-2 space-y-8">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {callForPapers.tracks.map((track, index) => (
                    <Card key={index} className="flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold">{track.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4">
                           <ul className="space-y-2">
                                {track.topics.map((topic, topicIndex) => (
                                    <li key={topicIndex} className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                                        <span className="text-muted-foreground text-sm">{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="bg-muted/50 p-4 mt-auto">
                            <div>
                                <p className="font-semibold text-primary text-xs flex items-center gap-2">
                                    <Landmark className="h-4 w-4" />
                                    Relevant SDGs: <span className="font-normal text-muted-foreground">{track.sdgs}</span>
                                </p>
                                <p className="text-xs text-muted-foreground/80 mt-1 italic">{track.explanation}</p>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
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
                 <Button asChild className="w-full mt-6">
                    <Link href="#">Submit Paper (Link disabled)</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                            <BookOpenCheck className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-2xl">Publication</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        {callForPapers.publicationDetails.description}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                        <Link href="/publication-details">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
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
