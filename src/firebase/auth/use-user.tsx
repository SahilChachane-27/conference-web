'use client';
import { useState, useEffect } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { useAuth } from '../provider';
import { Skeleton } from '@/components/ui/skeleton';

export function useUser() {
  const auth = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      setIsLoading(false);
      return;
    };
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  return { user, isLoading };
}

export const AuthLoader = ({ children, loading }: { children: React.ReactNode, loading?: React.ReactNode }) => {
  const { isLoading } = useUser();
  if (isLoading) {
    return loading || <Skeleton className="w-full h-8" />;
  }
  return <>{children}</>;
}
