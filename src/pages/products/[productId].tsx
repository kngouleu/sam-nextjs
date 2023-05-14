import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { db } from '@/firebase/firebaseConfig';
import { Product } from '@/types/types';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import * as S from '../../styles/productId.styles';
import * as T from '@/styles/Home.styles';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { Firestore, doc, getDoc } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import { RootState } from '../../redux/store/configureStore';
import { ProductPageProps } from '@/types/types';


const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  const handleSearch = (searchTerm: string) => {
  };
  const [notificationMessage, setNotificationMessage] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch()
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    setNotificationMessage("Product added to the cart!");
  };
  console.log(cart);
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  
  return (
    <>
      <T.PageContainer>
        <Header />
        <T.MainContent>
          <S.ProductDetails>
            <S.ProductImage>
              <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            </S.ProductImage>
            <S.ProductInfo>
              <S.ProductHeader>
                <S.ProductTitle>{product.name}</S.ProductTitle>
                <S.ProductPrice>${product.price.toFixed(2)}</S.ProductPrice>
              </S.ProductHeader>
              <S.ButtonContainer>
                <T.Button onClick={handleAddToCart}>
                  Add to Cart
                </T.Button>
                <S.FavoriteButton onClick={() => setIsFavorite(!isFavorite)}>
                Favorite {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
                </S.FavoriteButton>
              </S.ButtonContainer>

            </S.ProductInfo>
          </S.ProductDetails>
        </T.MainContent>
        <Footer />
      </T.PageContainer>
      {
        notificationMessage && (
          <S.Notification isError={!notificationMessage.startsWith("Product added")}>
            {notificationMessage}
          </S.Notification>)
      }
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const productIds = await getDocs(collection(db, 'products')).then((snapshot: { docs: { id: any; }[]; }) => snapshot.docs.map((doc: { id: any; }) => doc.id));

  const paths = productIds.map((productId: any) => ({
    params: { productId },
  }));

  return { paths, fallback: false };
};

const fetchProduct = async (productId: string) => {
  const productRef = doc(db, 'products', productId);
  const docSnap = await getDoc(productRef);
  const productData = docSnap.data();
  
  return { id: docSnap.id, ...productData };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { productId } = context.params as { productId: string };

  const product = await fetchProduct(productId);

  return {
    props: { product },
  };
};


export default ProductPage;
