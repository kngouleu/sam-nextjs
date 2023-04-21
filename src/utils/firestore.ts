import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Firestore } from 'firebase/firestore';

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: "AIzaSyBBQUX-T8igcDatSKqFxyz7mjnGFiD-A4c",
  authDomain: "sam-project-b2226.firebaseapp.com",
  projectId: "sam-project-b2226",
  storageBucket: "sam-project-b2226.appspot.com",
  messagingSenderId: "198019960763",
  appId: "1:198019960763:web:7774a78f36e90176683e9e",
  measurementId: "G-H1ZTBQBSET"
};

export const app = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);

interface ProductData {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
// Add product function
export async function addProduct(productData: ProductData) {
  try {
    console.log('Firestore instance:', db);
    const productRefPromise = addDoc(collection(db, 'products'), productData)
    console.log('productRefPromise:', productRefPromise)
    
    productRefPromise.then(productRef => {
      console.log('Product added with ID:', productRef.id)
    }).catch(error => {
      console.error('Error adding product:', error)
    })

    const productRef = await productRefPromise;
    console.log('productRef:', productRef);

    console.log('Product added with ID:', productRef.id);

    return productRef; // Return the product reference
  } catch (error) {
    console.error('Error adding product in addProduct function:', error);
    throw error; // Throw the error to be caught in the handleSubmit function
  }
}
