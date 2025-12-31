
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { callForPapers, publishingPartners } from "@/lib/data";
import { Check, BookOpenCheck, ShieldCheck, SearchCheck, Award } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PublicationDetailsPage() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-28 md:pt-36">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-5xl mx-auto font-serif">
            
            {/* Headline */}
            <div className="text-center mb-8 border-b-2 border-foreground pb-4">
                <h1 className="text-5xl md:text-7xl font-bold font-headline text-foreground">
                    The SustainTech Times
                </h1>
                <p className="text-lg text-muted-foreground mt-2">Your Trusted Source for Conference Publication News</p>
            </div>

            <div className="space-y-8">
                <article>
                    <h2 className="text-3xl font-bold font-headline mb-4">Publication Details</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                        <span className="float-left text-5xl font-bold mr-3 mt-1">S</span>elected high-quality papers will be published in Scopus-Indexed Conference Proceedings or Scopus Journals, subject to publisher approval and potential additional charges. Further accepted papers may find a home in peer-reviewed journals with a DOI. Every submission undergoes a stringent process of peer review, plagiarism checks, and quality assessment, with final publication contingent on adherence to publisher norms and ethical guidelines.
                    </p>
                </article>

                <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                    <h3 className="text-2xl font-bold font-headline mb-4 border-b border-border pb-2">At a Glance</h3>
                    <ul className="space-y-3 text-muted-foreground">
                       <li className="flex items-start gap-3">
                            <Award className="h-5 w-5 text-primary mt-1 shrink-0" />
                            <span><span className="font-bold">Indexing:</span> Scopus (selected)</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                            <span><span className="font-bold">Ethics:</span> Original work required</span>
                        </li>
                    </ul>
                </div>

                <Separator className="my-8 bg-border" />
                
                <article>
                    <h2 className="text-3xl font-bold font-headline mb-4">Peer Review Process</h2>
                    <ul className="space-y-4 text-muted-foreground text-justify">
                        <li className="flex items-start gap-3">
                            <SearchCheck className="h-6 w-6 text-primary mt-1 shrink-0" />
                            <span>All submitted papers undergo a rigorous <span className="font-semibold">double-blind peer review</span> by at least two independent experts to ensure unbiased evaluation.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <ShieldCheck className="h-6 w-6 text-primary mt-1 shrink-0" />
                            <span>Submissions are meticulously scanned for originality and plagiarism using industry-standard software to uphold the highest levels of academic integrity.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <BookOpenCheck className="h-6 w-6 text-primary mt-1 shrink-0" />
                            <span>Final acceptance is contingent on the thorough incorporation of reviewer feedback and strict adherence to all formatting guidelines provided.</span>
                        </li>
                    </ul>
                </article>
                
                <Separator className="my-8 bg-border" />

                <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                    <h3 className="text-2xl font-bold font-headline mb-4 border-b border-border pb-2">Publishing Partners</h3>
                    <p className="text-muted-foreground mb-4 text-sm">In collaboration with leading academic publishers.</p>
                    <div className="relative w-full overflow-hidden bg-transparent">
                        <div className="flex animate-marquee">
                            {[...publishingPartners, ...publishingPartners].map((partner, index) => (
                                <div key={index} className="flex-shrink-0 mx-6 w-36">
                                    <div className="relative aspect-video h-20 mx-auto">
                                        <Image 
                                            src={partner.image.imageUrl}
                                            alt={partner.name}
                                            fill
                                            className="object-contain"
                                            data-ai-hint={partner.image.imageHint}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
