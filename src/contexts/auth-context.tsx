import React, { createContext, useEffect, useState } from 'react';
import { auth } from '@/firebase/firebaseConfig';
import firebase from 'firebase/app';


interface AuthContextType {
  currentUser: firebase.User | null;
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
});

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
