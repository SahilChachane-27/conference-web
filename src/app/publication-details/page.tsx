
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { publishingPartners } from "@/lib/data";
import { BookOpenCheck, ShieldCheck, SearchCheck, Award, FileText, CheckCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PublicationDetailsPage() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-28 md:pt-36">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-bold font-headline text-foreground">
                    Publication & Guidelines
                </h1>
                <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">Your guide to submitting and publishing with SustainTechCon 2026.</p>
            </div>

            <div className="space-y-12">
                <Card className="shadow-lg border-primary/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-3xl">
                            <FileText className="h-7 w-7 text-primary" />
                            Publication Details
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                            Selected high-quality papers will be published in Scopus-Indexed Conference Proceedings / Scopus Journals (subject to publisher approval and potential additional APC charges). Additional accepted papers may be published in peer-reviewed journals with DOI. All papers will be subjected to rigorous peer review, plagiarism, and quality checks. Publication is subject to publisher norms and ethical guidelines.
                        </p>
                    </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                                <Award className="h-6 w-6 text-primary" />
                                Indexing
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Selected high-quality papers will be published in proceedings indexed by Scopus, ensuring maximum visibility and impact for your research.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                         <CardHeader>
                            <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                                <Sparkles className="h-6 w-6 text-primary" />
                                Ethical Guidelines
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Authors must ensure work is original. Any use of AI-generated content must be clearly disclosed and comply with publisher policies.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                             <SearchCheck className="h-6 w-6 text-primary" />
                            Review Process
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                <span>All submitted papers will undergo a rigorous <span className="font-semibold">double-blind peer review</span> process by at least two independent reviewers.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                <span>Submissions will be checked for originality and plagiarism using industry-standard tools.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                <span>Final acceptance is contingent on incorporating reviewer feedback and adhering to all formatting guidelines.</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
                
                <Separator className="my-8 bg-border" />

                <div className="text-center">
                    <h3 className="text-2xl font-bold font-headline mb-4">Publishing Partners</h3>
                    <p className="text-muted-foreground mb-8 text-sm">In collaboration with leading academic publishers.</p>
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
