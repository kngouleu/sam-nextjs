import { db } from '@/firebase/firebaseConfig';
import { Product } from '@/types/types';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { ProductData } from '@/types/types';
export async function getProductsByUser(userId: string): Promise<Product[]> {
  const productsRef = collection(db, 'products');
  const q = query(productsRef, where('userId', '==', userId));
  const snapshot = await getDocs(q);

  const products: Product[] = [];
  snapshot.forEach((doc) => {
    const data = doc.data();
    products.push({
      id: doc.id,
      name: data.name,
      description: data.description,
      price: data.price,
      imageUrl: data.imageUrl,
      userId: data.userId,
    });
  });
  return products;
}

export async function addProduct(productData: ProductData, userId: string) {
  try {
    const productsRef = collection(db, 'products');
    const productRef = await addDoc(productsRef, { ...productData, userId });
    console.log('Product added with ID:', productRef.id);
    return productRef;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
}

export const fetchProducts = async (): Promise<{
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    userId: string
  }[]> => {
    const snapshot = await getDocs(collection(db, 'products'));
    const fetchedProducts = snapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      description: doc.data().description,
      price: doc.data().price,
      imageUrl: doc.data().imageUrl,
      userId: doc.data().userId, 

    }));
  
    return fetchedProducts;
  };
  
