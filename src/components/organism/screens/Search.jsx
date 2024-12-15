import React from 'react';
import styled from 'styled-components';
import HorizontalHeader from '../../atomic/HorizontalHeader';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Icon from '../../atomic/Icon';
import VerticalSidebar from '../../molecule/VerticalSidebar';
import SearchBar from '../../atomic/SearchBar';
import SearchResults from '../../molecule/SearchResults';
import axios from 'axios';
import { useState } from 'react';

export const Search = () => {
  const navigate = useNavigate();

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
    <DashboardContainer>
      <VerticalSidebar />
      <MainContentContainer>
        <HorizontalHeader
          leftElement={<SearchBar onSearch={setQuery} />}
          rightElement={
            <StyledIcon
              icon={faUser}
              alt="Profile Icon"
              text="Profile"
              onClick={() => navigate('/profile')}
            />
          }
        />
        <SearchResults query={query} />
      </MainContentContainer>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;
const StyledIcon = styled(Icon)`
  margin-top: 2rem;
`;
