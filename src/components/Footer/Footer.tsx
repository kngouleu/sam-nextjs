import React from 'react';
import * as S from './Footer.styles';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <p>&copy; {new Date().getFullYear()} Sam. All rights reserved.</p>
    </S.FooterContainer>
  );
};

export default Footer;
