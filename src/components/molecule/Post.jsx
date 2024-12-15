import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ClubLogo } from '../atomic/ClubLogo';
import ClickableText from '../atomic/ClickableText';
import { useNavigate } from 'react-router-dom';
import { getUserById } from '../../api/user';
import { getClubById } from '../../api';

const Post = ({ title, content, logo, datePosted, userId, clubId }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [clubData, setClubData] = useState();

  // Fetch user data on component mount
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        if (!userId) return;
        const response = await getUserById(userId);
        setUserData(response);
      } catch (error) {
        console.error('Error fetching clubData:', error);
      }

      try {
        if (!clubId) return;
        const response = await getClubById(clubId);
        setClubData(response);
      } catch (error) {
        console.error('Error fetching clubData:', error);
      }
    };

    fetchPostData();
  }, []);

  // Format the datePosted
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <PostContainer>
      <HorizontalContainer>
        <ContainerLeft>
          {logo && <StyledLogo src={clubData?.logo || logo} alt="Club Logo" />}
          <ClickableText
            text={clubData?.name}
            variant="dark"
            onClick={() => navigate(`/club/${clubData?.name}`)}
          />
        </ContainerLeft>
        <ContainerRight>
          <UserAndDate>
            Posted On {formatDate(datePosted)} By: {userData?.username}
          </UserAndDate>
        </ContainerRight>
      </HorizontalContainer>
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
    </PostContainer>
  );
};

export default Post;

// Styled Components for Post
const PostContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const HorizontalContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const ContainerLeft = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-left: 3rem;
`;

const ContainerRight = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 3rem;
`;

const UserAndDate = styled.h3`
  font-size: 1rem;
  color: #6c757d;
`;

const PostTitle = styled.h1`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.fourth};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-left: 3rem;
  font-weight: 300;
`;

const StyledLogo = styled(ClubLogo)`
  height: 50px;
  width: 50px;
  margin-right: 1rem;
`;

const PostContent = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.fourth};
  margin-left: 3rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 300;
`;
