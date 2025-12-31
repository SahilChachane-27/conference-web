
"use client";

import { useState } from 'react';
import { registrationFees } from '@/lib/data';
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Ticket as TicketIcon } from 'lucide-react';

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
                
                <div className="max-w-5xl mx-auto border rounded-lg shadow-lg">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-muted/50">
                                <TableHead className="font-bold text-foreground">Category</TableHead>
                                <TableHead className="font-bold text-foreground text-center">Indian Delegate</TableHead>
                                <TableHead className="font-bold text-foreground text-center">Foreign Delegate</TableHead>
                                <TableHead className="font-bold text-foreground text-center">Registration</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {registrationFees.map((fee, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-semibold">{fee.category}</TableCell>
                                    <TableCell className="text-center">{fee.indianDelegateFee}</TableCell>
                                    <TableCell className="text-center">{fee.foreignDelegateFee}</TableCell>
                                    <TableCell className="text-center">
                                        <Button size="sm" onClick={() => handleGetTicket(fee.category)}>
                                            <TicketIcon className="mr-2 h-4 w-4" />
                                            Register
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle className="text-primary font-headline">Registration Confirmation</AlertDialogTitle>
                    <AlertDialogDescription>
                        You have successfully simulated registering for the "{selectedTicket}" category.
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
