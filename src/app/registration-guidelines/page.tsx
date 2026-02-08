
'use client';
import { useMemo } from 'react';
import { collection } from 'firebase/firestore';
import { useFirestore, useCollection, FirebaseClientProvider } from '@/firebase';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { tickets as defaultTicketsData } from "@/lib/data";
import { Check } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Ticket as TicketIcon } from "lucide-react";
import { Skeleton } from '@/components/ui/skeleton';

type Ticket = {
    id: string;
    category: string;
    indianDelegateFee: string;
    foreignDelegateFee: string;
};

function RegistrationGuidelinesPageContent() {
    const firestore = useFirestore();
    const ticketsRef = useMemo(() => firestore ? collection(firestore, 'conferences', 'main', 'tickets') : null, [firestore]);
    const { data: tickets, isLoading } = useCollection(ticketsRef);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-28">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold font-headline mb-8 text-primary">Registration Guidelines</h1>
            <div className="prose lg:prose-xl max-w-none text-muted-foreground space-y-8">
                <p>
                    To ensure a smooth registration process for SustainTechCon 2026, please review the following guidelines carefully. At least one author of each accepted paper must register for the conference for the paper to be included in the proceedings.
                </p>

                <div>
                    <h2 className="text-2xl font-headline font-bold text-foreground mb-4">Fee Structure</h2>
                    <div className="border rounded-lg overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/50">
                                    <TableHead className="font-bold text-foreground">Category</TableHead>
                                    <TableHead className="font-bold text-foreground">Indian Delegate</TableHead>
                                    <TableHead className="font-bold text-foreground">Foreign Delegate</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {isLoading ? (
                                    <>
                                        <TableRow>
                                            <TableCell><Skeleton className="h-5 w-3/4" /></TableCell>
                                            <TableCell><Skeleton className="h-5 w-1/2" /></TableCell>
                                            <TableCell><Skeleton className="h-5 w-1/2" /></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><Skeleton className="h-5 w-3/4" /></TableCell>
                                            <TableCell><Skeleton className="h-5 w-1/2" /></TableCell>
                                            <TableCell><Skeleton className="h-5 w-1/2" /></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><Skeleton className="h-5 w-3/4" /></TableCell>
                                            <TableCell><Skeleton className="h-5 w-1/2" /></TableCell>
                                            <TableCell><Skeleton className="h-5 w-1/2" /></TableCell>
                                        </TableRow>
                                    </>
                                ) : (
                                    tickets && tickets.map((fee: Ticket) => (
                                        <TableRow key={fee.id}>
                                            <TableCell className="font-semibold">{fee.category}</TableCell>
                                            <TableCell>{fee.indianDelegateFee}</TableCell>
                                            <TableCell>{fee.foreignDelegateFee}</TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-headline font-bold text-foreground mb-4">Entitlements for Registered Authors/Attendees</h2>
                     <ul className="space-y-3">
                        {defaultTicketsData[0].features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-2 text-sm">
                        Note: Attendees not presenting a paper will receive a certificate of participation instead of presentation.
                    </p>
                </div>
                
                <div>
                    <h2 className="text-2xl font-headline font-bold text-foreground mb-4">Important Notes</h2>
                     <ul className="list-disc pl-5 space-y-2">
                        <li>The registration fee is non-refundable under any circumstances.</li>
                        <li>The fee covers one paper presentation. Additional papers by the same author may require a separate registration.</li>
                        <li>All payments must be made in USD or INR as applicable.</li>
                        <li>Please ensure you complete your registration and payment before the final camera-ready submission deadline to avoid any issues.</li>
                    </ul>
                </div>

                 <div>
                    <h2 className="text-2xl font-headline font-bold text-foreground mb-4">How to Register</h2>
                     <p>
                        To register, please visit our registration page and select your category. The registration process is simulated for this demonstration website.
                    </p>
                    <div className='mt-4'>
                        <Button asChild>
                            <Link href="/registration">
                                <TicketIcon className="mr-2 h-4 w-4" />
                                Go to Registration Page
                            </Link>
                        </Button>
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


export default function RegistrationGuidelinesPage() {
    return (
        <FirebaseClientProvider>
            <RegistrationGuidelinesPageContent />
        </FirebaseClientProvider>
    )
}
