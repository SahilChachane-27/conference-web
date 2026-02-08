'use client';
import { useState, useEffect } from 'react';
import { onSnapshot, DocumentReference, DocumentData } from 'firebase/firestore';
import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError, type SecurityRuleContext } from '../errors';

export function useDoc<T>(ref: DocumentReference<T> | null) {
  const [data, setData] = useState<(T & { id: string }) | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!ref) {
        setData(null);
        setIsLoading(false);
        return;
    }

    const unsubscribe = onSnapshot(ref,
      (doc) => {
        if (doc.exists()) {
          setData({ ...doc.data(), id: doc.id });
        } else {
          setData(null);
        }
        setIsLoading(false);
      },
      async (err) => {
        const permissionError = new FirestorePermissionError({
          path: ref.path,
          operation: 'get',
        } satisfies SecurityRuleContext);

        errorEmitter.emit('permission-error', permissionError);
        setError(permissionError);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, [ref]);

  return { data, isLoading, error };
}
