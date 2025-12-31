
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function AboutCollege() {
    const collegeImage = PlaceHolderImages.find(img => img.id === 'college-building');

  return (
    <section id="about-college" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center">
            <Card className="max-w-6xl w-full shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="relative min-h-[300px] md:min-h-0">
                        {collegeImage && (
                            <Image
                                src="/college.JPG"
                                alt="Vasantdada Patil Pratishthan’s College of Engineering & Visual Arts"
                                fill
                                className="object-cover"
                                data-ai-hint={collegeImage.imageHint}
                            />
                        )}
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">
                            About the <span className="text-primary">College</span>
                        </h2>
                        <div className="text-muted-foreground space-y-4 text-base text-justify mt-4">
                            <p>
                                Vasantdada Patil Pratishthan’s College of Engineering & Visual Arts
                                (VPPCOE&VA) is one of the top private engineering colleges
                                in Mumbai. Established in 1990, it is a tribute to Late
                                Padmabhushan Vasantdada Patil.
                            </p>
                            <p>
                                The college is approved by AICTE, DTE, and DOA, and is accredited by NAAC with an 'A' grade. The Computer and IT programs are NBA accredited.
                            </p>
                        </div>
                         <div className="mt-6">
                            <Button asChild variant="outline">
                                <Link href="/about/college">
                                    Read More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
      </div>
    </section>
  );
}
