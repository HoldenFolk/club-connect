import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ClubHeader from '../molecule/ClubHeader';
import ClickableText from '../atomic/ClickableText';
import PostList from './PostList';
import { getClubPosts } from '../../api/posts';
import settings from '../../globalSettings';
import Button from '../atomic/Button';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../styles/constants';

// TODO: Clean Logic, Change post count?
const ClubContent = ({ clubData }) => {
  const { name, logo, banner, category, description, website, clubID } =
    clubData;
  const [posts, setPosts] = useState([]);
  const { BASE_POST_COUNT, DEFAULT_CLUB_LOGO } = settings;
  const navigate = useNavigate();
  // Fetch post data on component mount
  useEffect(() => {
    const fetchAPIData = async () => {
      try {
        if (!name) return;
        const response = await getClubPosts(name, BASE_POST_COUNT);
        setPosts(response.posts);
      } catch (error) {
        console.error('Error fetching clubData:', error);
      }
    };

    fetchAPIData();
  }, [name]);

  const handlePostClick = async () => {
    navigate(`/club/${name}/post`);
  };

  return (
    <ClubContainer>
      <ClubHeader
        name={name}
        logo={logo || DEFAULT_CLUB_LOGO}
        banner={banner}
        clubID={clubID}
      />
      <ClubInfo>
        <HorizontalContainer>
          <Button
            text={'Post +'}
            variant={'fill'}
            onClick={handlePostClick}
            color={theme.colors.tertiary}
          />
          <ClubCategory>Category: {category}</ClubCategory>
          {website && (
            <ClickableText
              variant="dark"
              text={`Club Website: ${website}`}
              onClick={() => window.open(website, '_blank')}
            />
          )}
        </HorizontalContainer>

        <ClubDescription>About: {description}</ClubDescription>
      </ClubInfo>

      {/* Render PostList only if posts is not empty */}
      {posts && <PostList posts={posts} defaultLogo={DEFAULT_CLUB_LOGO} />}
    </ClubContainer>
  );
};

export default ClubContent;

// Styled Components for ClubContent
const ClubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  height: 100vh;
`;

const ClubInfo = styled.div`
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ClubCategory = styled.h3`
  font-size: 1rem;
  color: #6c757d;
  margin-right: 2rem;
  margin-left: 2rem;
`;

const ClubDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.fourth};
  margin-bottom: 20px;
`;

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
`;
