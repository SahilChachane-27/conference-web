'use client';
import { useState, useEffect, useMemo } from 'react';
import { collection, doc, writeBatch } from 'firebase/firestore';
import { useFirestore, useCollection } from '@/firebase';
import { registrationFees as defaultTickets } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

type Ticket = {
  id: string;
  category: string;
  indianDelegateFee: string;
  foreignDelegateFee: string;
};

export default function AdminTicketsPage() {
  const firestore = useFirestore();
  const { toast } = useToast();
  const ticketsRef = useMemo(() => firestore ? collection(firestore, 'tickets') : null, [firestore]);
  const { data: ticketsData, isLoading: isTicketsLoading } = useCollection(ticketsRef);

  const [editedTickets, setEditedTickets] = useState<Ticket[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);

  useEffect(() => {
    if (ticketsData) {
      setEditedTickets(ticketsData as Ticket[]);
    }
  }, [ticketsData]);

  const handleInputChange = (id: string, field: keyof Ticket, value: string) => {
    setEditedTickets((prev) =>
      prev.map((ticket) => (ticket.id === id ? { ...ticket, [field]: value } : ticket))
    );
  };
  
  const handleInitializeTickets = () => {
    if (!firestore) return;
    setIsInitializing(true);
    
    const batch = writeBatch(firestore);
    const ticketsCollectionRef = collection(firestore, 'tickets');

    defaultTickets.forEach((ticket) => {
      const newTicketRef = doc(ticketsCollectionRef);
      batch.set(newTicketRef, ticket);
    });

    batch.commit()
      .then(() => {
        toast({
          title: 'Success',
          description: 'Default tickets have been created.',
        });
      })
      .catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
          path: '/tickets',
          operation: 'create',
          requestResourceData: defaultTickets,
        });
        errorEmitter.emit('permission-error', permissionError);
      })
      .finally(() => {
        setIsInitializing(false);
      });
  };

  const handleSaveChanges = async () => {
    if (!firestore) return;
    setIsSaving(true);
    
    const batch = writeBatch(firestore);
    editedTickets.forEach((ticket) => {
      const { id, ...ticketData } = ticket;
      const ticketRef = doc(firestore, 'tickets', id);
      batch.update(ticketRef, ticketData);
    });

    batch.commit()
      .then(() => {
        toast({
          title: 'Success',
          description: 'Registration fees have been updated.',
        });
      })
      .catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
          path: '/tickets',
          operation: 'update',
          requestResourceData: editedTickets,
        });
        errorEmitter.emit('permission-error', permissionError);
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

  if (isTicketsLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-4 w-3/4" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (ticketsData && ticketsData.length === 0) {
      return (
          <Card>
              <CardHeader>
                  <CardTitle>Initialize Tickets</CardTitle>
                  <CardDescription>
                      The tickets collection is empty. You can initialize it with default values.
                  </CardDescription>
              </CardHeader>
              <CardFooter>
                  <Button onClick={handleInitializeTickets} disabled={isInitializing}>
                      {isInitializing ? 'Initializing...' : 'Initialize Default Tickets'}
                  </Button>
              </CardFooter>
          </Card>
      )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Registration Fees</CardTitle>
        <CardDescription>
          Manage the ticket prices for different delegate categories.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>Indian Delegate Fee</TableHead>
              <TableHead>Foreign Delegate Fee</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {editedTickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell className="font-medium">{ticket.category}</TableCell>
                <TableCell>
                  <Input
                    value={ticket.indianDelegateFee}
                    onChange={(e) =>
                      handleInputChange(ticket.id, 'indianDelegateFee', e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={ticket.foreignDelegateFee}
                    onChange={(e) =>
                      handleInputChange(ticket.id, 'foreignDelegateFee', e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSaveChanges} disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save Changes'}
        </Button>
      </CardFooter>
    </Card>
  );
}
