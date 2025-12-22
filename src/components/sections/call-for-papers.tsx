import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { callForPapers } from "@/lib/data";
import { FileText, BookOpenCheck, ListChecks } from "lucide-react";

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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Conference Themes */}
          <Card className="lg:col-span-3 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <ListChecks className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">Conference Themes</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-base font-semibold">
                            AI, Data, and Intelligent Systems
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2">
                                {callForPapers.themes.slice(0, 5).map((theme) => (
                                    <li key={theme}>{theme}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-base font-semibold">
                            Hardware, IoT, and Automation
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2">
                                {callForPapers.themes.slice(5, 9).map((theme) => (
                                    <li key={theme}>{theme}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-base font-semibold">
                            Networking and Security
                        </AccordionTrigger>
                        <AccordionContent>
                             <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2">
                                {callForPapers.themes.slice(9, 12).map((theme) => (
                                    <li key={theme}>{theme}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border-b-0">
                        <AccordionTrigger className="text-base font-semibold">
                            Applications and Sustainability
                        </AccordionTrigger>
                        <AccordionContent>
                             <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2">
                                {callForPapers.themes.slice(12).map((theme) => (
                                    <li key={theme}>{theme}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
          </Card>

          {/* Submission and Publication Details */}
          <div className="lg:col-span-2 space-y-8">
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
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <BookOpenCheck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{callForPapers.publicationDetails.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{callForPapers.publicationDetails.description}</p>
                <p className="font-semibold text-primary">Indexing: <span className="font-normal text-muted-foreground">{callForPapers.publicationDetails.indexing}</span></p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}