import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import * as S from '@/styles/Contact.styles';

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <S.Container>
        <h1>Contact Us</h1>
        <p>If you have any questions, please reach out to us at:</p>
        <p>
          <strong>Email:</strong> support@example.com
        </p>
      </S.Container>
      <Footer />
    </>
  );
};

export default Contact;
