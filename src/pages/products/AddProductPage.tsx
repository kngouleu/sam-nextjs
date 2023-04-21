import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import * as S from '@/styles/AddProduct.styles';
// import { addProduct } from '../../pages/redux/actions/productActions';
import { addProduct } from '@/utils/firestore';
import { uploadImage } from '@/utils/storage';
import { useRouter } from 'next/router';
import { storage } from '@/firebase/firebaseConfig';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { RootState } from '../redux/store/configureStore';


const AddProductPage: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const router = useRouter();
  const dispatch = useDispatch<ThunkDispatch<RootState, {}, AnyAction>>();


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!imageFile) {
    alert('Please select an image');
    return;
  }

  // Upload the image and get the download URL
  const imagePath = `products/${Date.now()}_${imageFile.name}`;
  const imageURL = await uploadImage(imageFile, imagePath);
  console.log('imageUrl : ', imageURL);

  // Call the addProduct function with the product data
  const productData = {
    name: productName,
    description,
    price: parseFloat(price),
    imageUrl: imageURL,
  };
  console.log('productData : ', productData);


  // Try to add the product and handle the result
  try {
    addProduct(productData);
    alert('Product added successfully');
    router.push('/products/MyProductsPage');
    console.log('Navigation complete');
  } catch (error) {
    console.error('Error adding product:', error);
    alert('Failed to add product. Please try again.');
  }

  // Reset form values
  setProductName('');
  setDescription('');
  setPrice('');
  setImageFile(null);
};

  

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };

  return (
    <S.Body>
      <Header />
      <S.AddProductContainer>
        <h1>Add Product</h1>
        <S.AddProductForm onSubmit={handleSubmit}>
          <S.FormLabel htmlFor="productName">Product Name *</S.FormLabel>
          <S.FormInput
            type="text"
            id="productName"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />

          <S.FormLabel htmlFor="description">Description *</S.FormLabel>
          <S.FormInput
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <S.FormLabel htmlFor="price">Price *</S.FormLabel>
          <S.FormInput
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step="0.01"
            required
          />

          <S.FormLabel htmlFor="image">Image *</S.FormLabel>
          <S.FormInput
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            required
          />

          <S.AddProductButton type='submit'>Submit</S.AddProductButton>
        </S.AddProductForm>
      </S.AddProductContainer>
      <Footer />
    </S.Body>
  );
};

export default AddProductPage;
function dispatch(arg0: ThunkAction<void, RootState, null, AnyAction>) {
  throw new Error('Function not implemented.');
}

