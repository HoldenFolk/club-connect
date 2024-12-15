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
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setIsLoading(true);

    try {
      const response = await axios.get(`/api/clubs/search`, {
        params: { query: searchQuery },
      });
      setResults(response.data); // Assuming the backend response contains the list of clubs
    } catch (error) {
      console.error('Error fetching search results:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageTemplate>
      <PrivPagesWrapper>
        <HorizontalHeader leftElement={<SearchBar onSearch={setQuery} />} />
        <SearchResults query={query} />
      </PrivPagesWrapper>
    </PageTemplate>
  );
};
