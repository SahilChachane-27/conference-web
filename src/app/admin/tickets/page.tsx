'use client';
import { useState, useEffect, useMemo } from 'react';
import { collection, doc, writeBatch, addDoc, deleteDoc } from 'firebase/firestore';
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
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PlusCircle, Trash2 } from 'lucide-react';

type Ticket = {
  id: string;
  category: string;
  indianDelegateFee: string;
  foreignDelegateFee: string;
};

const newTicketSchema = z.object({
    category: z.string().min(1, 'Category is required'),
    indianDelegateFee: z.string().min(1, 'Indian Delegate Fee is required'),
    foreignDelegateFee: z.string().min(1, 'Foreign Delegate Fee is required'),
});

type NewTicketFormValues = z.infer<typeof newTicketSchema>;

export default function AdminTicketsPage() {
  const firestore = useFirestore();
  const { toast } = useToast();
  const ticketsRef = useMemo(() => firestore ? collection(firestore, 'tickets') : null, [firestore]);
  const { data: ticketsData, isLoading: isTicketsLoading } = useCollection(ticketsRef);

  const [editedTickets, setEditedTickets] = useState<Ticket[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [ticketToDelete, setTicketToDelete] = useState<Ticket | null>(null);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting: isAdding } } = useForm<NewTicketFormValues>({
    resolver: zodResolver(newTicketSchema),
  });

  useEffect(() => {
    if (ticketsData) {
      setEditedTickets(ticketsData as Ticket[]);
    }
  }, [ticketsData]);

  const handleInputChange = (id: string, field: keyof Omit<Ticket, 'id'>, value: string) => {
    setEditedTickets((prev) =>
      prev.map((ticket) => (ticket.id === id ? { ...ticket, [field]: value } : ticket))
    );
  };
  
  const handleInitializeTickets = () => {
    if (!firestore || !ticketsRef) return;
    setIsInitializing(true);
    
    const batch = writeBatch(firestore);
    defaultTickets.forEach((ticket) => {
      const newTicketRef = doc(ticketsRef);
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
          path: ticketsRef.path,
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
          path: '/tickets', // Batch update can span multiple docs
          operation: 'update',
          requestResourceData: editedTickets,
        });
        errorEmitter.emit('permission-error', permissionError);
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

  const handleAddTicket = async (data: NewTicketFormValues) => {
    if (!ticketsRef) return;

    addDoc(ticketsRef, data)
      .then(() => {
        toast({
          title: 'Success',
          description: 'New ticket has been added.',
        });
        setIsAddDialogOpen(false);
        reset();
      })
      .catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
          path: ticketsRef.path,
          operation: 'create',
          requestResourceData: data,
        });
        errorEmitter.emit('permission-error', permissionError);
      });
  }

  const handleDeleteTicket = async () => {
    if (!firestore || !ticketToDelete) return;

    const ticketRef = doc(firestore, 'tickets', ticketToDelete.id);
    deleteDoc(ticketRef)
      .then(() => {
        toast({
          title: 'Success',
          description: 'Ticket has been deleted.',
        });
        setTicketToDelete(null);
      })
      .catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
          path: ticketRef.path,
          operation: 'delete',
        });
        errorEmitter.emit('permission-error', permissionError);
      });
  }


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

  if (ticketsData && ticketsData.length === 0 && !isInitializing) {
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
    <>
        <Card>
            <CardHeader className="flex-row items-center justify-between">
                <div>
                    <CardTitle>Registration Fees</CardTitle>
                    <CardDescription>
                    Manage the ticket prices for different delegate categories.
                    </CardDescription>
                </div>
                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                    <DialogTrigger asChild>
                        <Button variant="outline">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Ticket
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Ticket</DialogTitle>
                            <DialogDescription>
                                Create a new registration category and set its price.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit(handleAddTicket)} className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="category">Category</Label>
                                <Input id="category" {...register('category')} />
                                {errors.category && <p className="text-destructive text-sm">{errors.category.message}</p>}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="indianDelegateFee">Indian Delegate Fee</Label>
                                <Input id="indianDelegateFee" {...register('indianDelegateFee')} />
                                {errors.indianDelegateFee && <p className="text-destructive text-sm">{errors.indianDelegateFee.message}</p>}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="foreignDelegateFee">Foreign Delegate Fee</Label>
                                <Input id="foreignDelegateFee" {...register('foreignDelegateFee')} />
                                {errors.foreignDelegateFee && <p className="text-destructive text-sm">{errors.foreignDelegateFee.message}</p>}
                            </div>
                            <DialogFooter>
                                <Button type="submit" disabled={isAdding}>
                                    {isAdding ? 'Adding...' : 'Add Ticket'}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </CardHeader>
            <CardContent>
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Indian Delegate Fee</TableHead>
                    <TableHead>Foreign Delegate Fee</TableHead>
                    <TableHead className="text-right w-[100px]">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {editedTickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                        <TableCell>
                            <Input
                                value={ticket.category}
                                onChange={(e) =>
                                handleInputChange(ticket.id, 'category', e.target.value)
                                }
                                className="font-medium"
                            />
                        </TableCell>
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
                        <TableCell className="text-right">
                            <Button variant="ghost" size="icon" onClick={() => setTicketToDelete(ticket)}>
                                <Trash2 className="h-4 w-4 text-destructive" />
                                <span className="sr-only">Delete</span>
                            </Button>
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
        
        <AlertDialog open={!!ticketToDelete} onOpenChange={(open) => !open && setTicketToDelete(null)}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will permanently delete the ticket category for &quot;{ticketToDelete?.category}&quot;. This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteTicket} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    </>
  );
}
