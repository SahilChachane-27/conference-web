

import { Card } from "@/components/ui/card";
import { committeeData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Users, Star, Phone, Shield, UserCheck } from "lucide-react";

const MemberCard = ({ name, role, special }: { name: string; role: string; special?: boolean }) => (
    <Card className={cn(
        "text-center shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-center p-4",
        special && "bg-primary/5 border-primary/20"
    )}>
        <p className="font-bold text-lg text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
    </Card>
);

const ContactCard = ({ name, role }: { name: string; role: string }) => (
    <Card className="text-center shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-center p-4 bg-secondary/50">
        <p className="font-bold text-lg text-foreground">{name}</p>
        <p className="text-sm text-primary font-semibold">{role}</p>
    </Card>
);


export function Committee() {
  return (
    <section id="committee" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Organizing</span> Committee
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            Meet the dedicated team behind SustainTechCon 2026.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
            {/* Leadership */}
            <div className="space-y-12">
                <div>
                    <h3 className="font-headline text-3xl font-bold text-primary text-center mb-8 flex items-center justify-center gap-3">
                        <Star className="h-7 w-7" />
                        Leadership
                    </h3>
                    <div className="space-y-8">
                        <div>
                            <h4 className="font-headline text-2xl font-bold text-foreground text-center mb-6">{committeeData.chiefPatrons.title}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {committeeData.chiefPatrons.members.map((member, i) => (
                                    <MemberCard key={i} {...member} special />
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col items-center">
                                <h4 className="font-headline text-2xl font-bold text-foreground text-center mb-4">{committeeData.generalChief.title}</h4>
                                <div className="w-full max-w-sm">
                                    <MemberCard {...committeeData.generalChief.members[0]} special />
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <h4 className="font-headline text-2xl font-bold text-foreground text-center mb-4">{committeeData.convener.title}</h4>
                                <div className="w-full max-w-sm">
                                    <MemberCard {...committeeData.convener.members[0]} special />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Patrons */}
            <div>
                <h3 className="font-headline text-3xl font-bold text-primary text-center mb-8 flex items-center justify-center gap-3">
                    <Shield className="h-7 w-7" />
                    {committeeData.patrons.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {committeeData.patrons.members.map((member, i) => <MemberCard key={i} {...member} />)}
                </div>
            </div>
            
            {/* Advisory Committee */}
            <div>
                <h3 className="font-headline text-3xl font-bold text-primary text-center mb-8 flex items-center justify-center gap-3">
                    <Users className="h-7 w-7" />
                    {committeeData.advisoryCommittee.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {committeeData.advisoryCommittee.members.map((member, i) => <MemberCard key={i} {...member} />)}
                </div>
            </div>
            
            {/* Contact */}
            <div>
                <h3 className="font-headline text-3xl font-bold text-primary text-center mb-8 flex items-center justify-center gap-3">
                    <Phone className="h-7 w-7" />
                    {committeeData.correspondenceContact.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {committeeData.correspondenceContact.members.map((member, i) => <ContactCard key={i} {...member} />)}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
