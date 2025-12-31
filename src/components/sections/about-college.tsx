import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function AboutCollege() {
    const collegeImage = PlaceHolderImages.find(img => img.id === 'college-building');

  return (
    <section id="about-college" className="bg-muted/30">
      <div className="mx-auto">
          <div className="grid md:grid-cols-2 min-h-[500px]">
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
              <div className="p-8 md:p-16 flex flex-col justify-center">
                   <div className="max-w-xl">
                      <h2 className="font-headline text-4xl md:text-5xl font-bold">
                          About the <span className="text-primary">College</span>
                      </h2>
                      <div className="text-muted-foreground text-lg space-y-4 text-justify mt-6">
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
                   </div>
              </div>
          </div>
      </div>
    </section>
  );
}
