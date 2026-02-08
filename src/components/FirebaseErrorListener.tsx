'use client';
import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';

export const FirebaseErrorListener = () => {
  useEffect(() => {
    const handleError = (error: Error) => {
      // In a real app, you might use a toast notification library
      console.error(error); 
      // This will be caught by Next.js error overlay in development
      throw error;
    };

    errorEmitter.on('permission-error', handleError);

    return () => {
      errorEmitter.off('permission-error', handleError);
    };
  }, []);

  return null; // This component does not render anything
};
