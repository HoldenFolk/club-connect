// Author: Torin Andrews
import React from 'react';
import HorizontalHeader from '../../atomic/HorizontalHeader';
import SearchBar from '../../atomic/SearchBar';
import SearchResults from '../../molecule/SearchResults';
import axios from 'axios';
import { useState } from 'react';
import { PageTemplate } from '../../template/index';
import PrivPagesWrapper from '../PrivPagesWrapper';

export const Search = () => {
  const [query, setQuery] = useState('');

  return (
    <PageTemplate>
      <PrivPagesWrapper>
        <HorizontalHeader leftElement={<SearchBar onSearch={setQuery} />} />
        <SearchResults query={query} />
      </PrivPagesWrapper>
    </PageTemplate>
  );
};
