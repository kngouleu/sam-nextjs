// components/SearchForm.tsx
import React, { useState } from 'react';
import * as S from './Search.styles';

interface SearchFormProps {
  onSearch: (searchTerm: string) => void;
  placeholder: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <S.SearchForm onSubmit={handleSearch}>
      <S.SearchInput
        type="text"
        placeholder= {placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </S.SearchForm>
  );
};

export default SearchForm;
