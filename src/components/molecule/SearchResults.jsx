import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { searchClubs } from '../../api/club';
import SearchPreview from '../atomic/SearchPreview';
import styled from 'styled-components';

const SearchResults = ({ query }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (query) {
          const res = await searchClubs(query);
          const { clubs } = res;
          console.log(clubs);
          if (Array.isArray(clubs)) {
            setResults(clubs);
          } else {
            setResults([]);
            console.log('No results found');
          }
        } else {
          setResults([]);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
        setResults([]);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <MainContainer>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <SearchPreview key={index} result={result} index={index} />
          ))}
        </ul>
      ) : (
        <h2>No Results for {query} </h2>
      )}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SearchResults;