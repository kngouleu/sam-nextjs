import { db } from '@/firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const fetchProducts = async (): Promise<{
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  }[]> => {
    const snapshot = await getDocs(collection(db, 'products'));
    const fetchedProducts = snapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      description: doc.data().description,
      price: doc.data().price,
      imageUrl: doc.data().imageUrl,
    }));
  
    return fetchedProducts;
  };
  
