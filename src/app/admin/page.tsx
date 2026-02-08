'use client';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { doc, setDoc } from 'firebase/firestore';
import { useFirestore, useDoc } from '@/firebase';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

const conferenceSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  subtitle: z.string().min(1, 'Subtitle is required'),
  date: z.string().min(1, 'Date is required'),
  location: z.string().min(1, 'Location is required'),
});

type ConferenceFormValues = z.infer<typeof conferenceSchema>;

export default function AdminPage() {
  const firestore = useFirestore();
  const { toast } = useToast();
  const configRef = firestore ? doc(firestore, 'config', 'main') : null;
  const { data: configData, isLoading: isConfigLoading } = useDoc(configRef);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConferenceFormValues>({
    resolver: zodResolver(conferenceSchema),
  });

  useEffect(() => {
    if (configData) {
      reset(configData as ConferenceFormValues);
    }
  }, [configData, reset]);

  const onSubmit: SubmitHandler<ConferenceFormValues> = async (data) => {
    if (!configRef) return;
    
    setDoc(configRef, data, { merge: true })
      .then(() => {
        toast({
          title: 'Success',
          description: 'Conference settings have been updated.',
        });
      })
      .catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
          path: configRef.path,
          operation: 'update',
          requestResourceData: data,
        });
        errorEmitter.emit('permission-error', permissionError);
      });
  };

  if (isConfigLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-4 w-3/4" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-24" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Conference Settings</CardTitle>
        <CardDescription>
          Update general information about the conference.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" {...register('title')} />
            {errors.title && <p className="text-destructive text-sm">{errors.title.message}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subtitle">Subtitle</Label>
            <Input id="subtitle" {...register('subtitle')} />
            {errors.subtitle && <p className="text-destructive text-sm">{errors.subtitle.message}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="date">Date</Label>
            <Input id="date" {...register('date')} />
            {errors.date && <p className="text-destructive text-sm">{errors.date.message}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" {...register('location')} />
            {errors.location && <p className="text-destructive text-sm">{errors.location.message}</p>}
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save Settings'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
