'use client';
import { useState, useEffect } from 'react';
import { onSnapshot, collection, query, where, getDocs, Query, DocumentData, CollectionReference } from 'firebase/firestore';
import { useFirestore } from '../provider';
import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError, type SecurityRuleContext } from '../errors';


export function useCollection<T>(q: Query<T> | CollectionReference<T> | null) {
  const [data, setData] = useState<(T & { id: string })[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!q) {
        setData([]);
        setIsLoading(false);
        return;
    };

    const unsubscribe = onSnapshot(q, 
      (querySnapshot) => {
        const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setData(data);
        setIsLoading(false);
      }, 
      async (err) => {
        const permissionError = new FirestorePermissionError({
          path: 'path' in q ? q.path : 'unknown',
          operation: 'list',
        } satisfies SecurityRuleContext);

        errorEmitter.emit('permission-error', permissionError);
        setError(permissionError);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, [q]);

  return { data, isLoading, error };
}
