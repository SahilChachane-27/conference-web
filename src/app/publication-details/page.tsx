
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { callForPapers, publishingPartners } from "@/lib/data";
import { Check, BookOpenCheck, ShieldCheck, SearchCheck, Award } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function PublicationDetailsPage() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-28 md:pt-36">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                Publication Details
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    {callForPapers.publicationDetails.description}
                </p>
            </div>
            
            <div className="space-y-8">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                                <Award className="h-7 w-7 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-2xl">Indexing & Visibility</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Selected high-quality papers will be published in proceedings indexed by <span className="font-semibold text-primary">{callForPapers.publicationDetails.indexing}</span>. This ensures maximum visibility and impact for your research, connecting it with a global academic audience.
                        </p>
                    </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                                <SearchCheck className="h-7 w-7 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-2xl">Peer Review Process</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                         <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                <span>All submitted papers will undergo a rigorous <span className="font-semibold">double-blind peer review</span> process by at least two independent reviewers.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                <span>Submissions are meticulously checked for originality and plagiarism using industry-standard software to ensure academic integrity.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                <span>Final acceptance is contingent on incorporating reviewer feedback and adhering to all formatting guidelines provided by the conference.</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                 <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                                <ShieldCheck className="h-7 w-7 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-2xl">Ethical Guidelines</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                         <p className="text-muted-foreground">
                            We are committed to the highest standards of publication ethics. Authors must ensure their work is original and has not been published elsewhere. Any use of AI-generated content must be clearly disclosed and comply with the publisher's policies to maintain transparency and academic honesty.
                        </p>
                    </CardContent>
                </Card>

                <div className="pt-8">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl font-bold">
                            Our <span className="text-primary">Publishing Partners</span>
                        </h2>
                        <p className="text-muted-foreground mt-2">In collaboration with leading academic publishers.</p>
                    </div>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {publishingPartners.map((partner, index) => (
                                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <div className="p-1">
                                        <Card className="overflow-hidden hover:shadow-md transition-shadow">
                                            <CardContent className="flex aspect-square items-center justify-center p-6 bg-white">
                                                <Image 
                                                    src={partner.image.imageUrl}
                                                    alt={partner.name}
                                                    width={150}
                                                    height={150}
                                                    className="object-contain"
                                                    data-ai-hint={partner.image.imageHint}
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
