
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { callForPapers } from "@/lib/data";
import { FileText, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

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

        {/* Conference Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {callForPapers.tracks.map((track, index) => {
            const Icon = trackIcons[`Track ${index + 1}`] || FileText;
            return (
              <Card key={index} className="group flex flex-col shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg mt-1">
                        <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <CardTitle className="font-headline text-xl">{track.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {track.topics.slice(0, 4).map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2 text-sm">
                        <ChevronRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                    {track.topics.length > 4 && (
                        <li className="flex items-start gap-2 text-sm">
                            <ChevronRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-muted-foreground italic">and more...</span>
                        </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Submission Guidelines */}
        <div className="max-w-4xl mx-auto">
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
    </section>
  );
}
