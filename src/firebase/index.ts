import { initializeApp, getApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { firebaseConfig } from './config';
import { useCollection } from './firestore/use-collection';
import { useDoc } from './firestore/use-doc';
import { useUser } from './auth/use-user';
import { FirebaseProvider, useFirebase, useFirebaseApp, useAuth, useFirestore } from './provider';
import { FirebaseClientProvider } from './client-provider';

function initializeFirebase(): { app: FirebaseApp; auth: Auth; firestore: Firestore } {
  if (typeof window === 'undefined') {
    // On the server, we return dummy instances.
    const app = { name: '[SERVER]', options: {} } as FirebaseApp;
    const auth = {} as Auth;
    const firestore = {} as Firestore;
    return { app, auth, firestore };
  }

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  return { app, auth, firestore };
}

export {
  initializeFirebase,
  FirebaseProvider,
  FirebaseClientProvider,
  useCollection,
  useDoc,
  useUser,
  useFirebase,
  useFirebaseApp,
  useAuth,
  useFirestore,
};
