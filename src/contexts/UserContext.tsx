import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '@/firebase/firebaseConfig';
import { User, onAuthStateChanged } from 'firebase/auth';


type UserContextType = {
    user: User | null;
  };
  
  export const UserContext = createContext<UserContextType | undefined>(undefined);
  
  export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };
  
  interface UserProviderProps {
    children: React.ReactNode;
  }
  
  export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    return (
      <UserContext.Provider value={{ user }}>
        {children}
      </UserContext.Provider>
    );
  };