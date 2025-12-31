
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { committeeData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Users, Star, Phone, Shield } from "lucide-react";

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

        <Tabs defaultValue="leadership" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            <TabsTrigger value="leadership" className="py-2.5"><Star className="mr-2 h-4 w-4" />Leadership</TabsTrigger>
            <TabsTrigger value="patrons" className="py-2.5"><Shield className="mr-2 h-4 w-4" />Patrons</TabsTrigger>
            <TabsTrigger value="advisory" className="py-2.5"><Users className="mr-2 h-4 w-4" />Advisory</TabsTrigger>
            <TabsTrigger value="contact" className="py-2.5"><Phone className="mr-2 h-4 w-4" />Contact</TabsTrigger>
          </TabsList>
          
          <div className="mt-8">
            <TabsContent value="leadership">
                <Card className="bg-card/80 p-6 md:p-8">
                    <div className="space-y-12">
                        <div>
                            <h3 className="font-headline text-2xl font-bold text-primary text-center mb-6">{committeeData.chiefPatrons.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {committeeData.chiefPatrons.members.map((member, i) => (
                                    <MemberCard key={i} {...member} special />
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-headline text-2xl font-bold text-primary text-center mb-4">{committeeData.generalChief.title}</h3>
                                <MemberCard {...committeeData.generalChief.members[0]} special />
                            </div>
                            <div>
                                <h3 className="font-headline text-2xl font-bold text-primary text-center mb-4">{committeeData.convener.title}</h3>
                                <MemberCard {...committeeData.convener.members[0]} special />
                            </div>
                        </div>
                    </div>
                </Card>
            </TabsContent>

            <TabsContent value="patrons">
                <Card className="bg-card/80 p-6 md:p-8">
                    <h3 className="font-headline text-2xl font-bold text-primary text-center mb-6">{committeeData.patrons.title}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {committeeData.patrons.members.map((member, i) => <MemberCard key={i} {...member} />)}
                    </div>
                </Card>
            </TabsContent>

            <TabsContent value="advisory">
                <Card className="bg-card/80 p-6 md:p-8">
                    <h3 className="font-headline text-2xl font-bold text-primary text-center mb-6">{committeeData.advisoryCommittee.title}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {committeeData.advisoryCommittee.members.map((member, i) => <MemberCard key={i} {...member} />)}
                    </div>
                </Card>
            </TabsContent>

            <TabsContent value="contact">
                 <Card className="bg-card/80 p-6 md:p-8">
                    <h3 className="font-headline text-2xl font-bold text-primary text-center mb-6">{committeeData.correspondenceContact.title}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {committeeData.correspondenceContact.members.map((member, i) => <ContactCard key={i} {...member} />)}
                    </div>
                </Card>
            </TabsContent>
          </div>
        </Tabs>

      </div>
    </section>
  );
}
