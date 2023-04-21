import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import * as S from '@/styles/Help.styles';

const Help: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <S.Body>
      <Header />
      <S.Container>
        <h1>Help</h1>
        <S.SearchBarContainer>
          <S.SearchBar
            type="text"
            placeholder="Search for help..."
            value={searchValue}
            onChange={handleSearch}
          />
        </S.SearchBarContainer>
        {/* Add search results or help articles here */}
      </S.Container>
      <Footer />
    </S.Body>
  );
};

export default Help;
