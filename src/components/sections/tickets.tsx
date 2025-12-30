
"use client";

import { useState } from 'react';
import { tickets } from '@/lib/data';
import Link from 'next/link';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Check, Ticket as TicketIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Tickets() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState('');

    const handleGetTicket = (ticketType: string) => {
        setSelectedTicket(ticketType);
        setDialogOpen(true);
    };
    
    return (
        <section id="tickets" className="py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold">
                        <span className="text-primary">Registration</span> Details
                    </h2>
                    <p className="text-lg text-muted-foreground mt-3 max-w-4xl mx-auto">
                        At least one author must register for each accepted paper to ensure inclusion in the conference proceedings. Registration fee is non-refundable. For detailed guidelines, please <Link href="/registration-guidelines" className='underline hover:text-primary'>click here</Link>.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {tickets.map((ticket, index) => (
                        <Card key={index} className={cn("flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300", ticket.featured && "border-2 border-primary relative ring-4 ring-primary/20")}>
                            {ticket.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </div>
                                </div>
                            )}
                            <CardHeader className="text-center">
                                <CardTitle className="font-headline text-2xl text-primary">{ticket.type}</CardTitle>
                                <CardDescription>
                                    <span className="text-4xl font-bold text-foreground">${ticket.earlyBird.usd.replace('$', '')}</span>
                                    <span className="text-muted-foreground"> USD</span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-3 text-muted-foreground">
                                    {ticket.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" size="lg" onClick={() => handleGetTicket(ticket.type)} variant={ticket.featured ? 'default' : 'outline'}>
                                    <TicketIcon className="mr-2 h-5 w-5" />
                                    Buy Now
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle className="text-primary font-headline">Registration Confirmation</AlertDialogTitle>
                    <AlertDialogDescription>
                        You have successfully simulated registering for the "{selectedTicket}" ticket.
                        This is a demonstration and no actual registration has been made.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogAction onClick={() => setDialogOpen(false)}>OK</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </section>
    );
}
