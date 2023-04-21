// components/SearchForm.tsx
import React, { useState } from 'react';
import * as S from '@/styles/Home.styles';

interface SearchFormProps {
  onSearch: (searchTerm: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <S.SearchForm onSubmit={handleSearch}>
      <S.SearchInput
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </S.SearchForm>
  );
};

export default SearchForm;
