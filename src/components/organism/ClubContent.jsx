import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ClubHeader from '../molecule/ClubHeader';
import ClickableText from '../atomic/ClickableText';
import PostList from './PostList';
import { getClubPosts } from '../../api/posts';

const ClubContent = ({ clubData }) => {
  const { name, logo, banner, category, description, website, clubID } =
    clubData;
  const [posts, setPosts] = useState([]);
  const POST_COUNT = 20;
  const DEFAULT_LOGO =
    'https://imgs.search.brave.com/JUREPkVy5BaQNfhp1cNHrqH8bElEKYzc05D_64RBAtQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9wcm9maWxl/LWRlZmF1bHQtaWNv/bi01MTJ4NTExLXY0/c3c0bTI5LnBuZw';
  // Fetch post data on component mount
  useEffect(() => {
    const fetchAPIData = async () => {
      try {
        if (!name) return;
        const response = await getClubPosts(name, POST_COUNT);
        setPosts(response.posts);
      } catch (error) {
        console.error('Error fetching clubData:', error);
      }
    };

    fetchAPIData();
  }, [name]);

  return (
    <ClubContainer>
      <ClubHeader
        name={name}
        logo={logo || DEFAULT_LOGO}
        banner={banner}
        clubID={clubID}
      />
      <ClubInfo>
        <HorizontalContainer>
          <ClubCategory>Category: {category}</ClubCategory>
          {website && (
            <ClickableText
              variant="dark"
              text="Visit Club Website"
              onClick={() => window.open(website, '_blank')}
            />
          )}
        </HorizontalContainer>

        <ClubDescription>Description: {description}</ClubDescription>
      </ClubInfo>

      {/* Render PostList only if posts is not empty */}
      {posts && (
        <PostList posts={posts} defaultLogo={DEFAULT_LOGO} clubName={name} />
      )}
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
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  height: 100vh;
  overflow: auto;
`;

const ClubInfo = styled.div`
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

const ClubCategory = styled.h3`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 20px;
`;

const ClubDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.fourth};
  margin-bottom: 20px;
`;

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
