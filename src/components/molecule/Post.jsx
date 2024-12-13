import React from 'react';
import styled from 'styled-components';
import { ClubLogo } from '../atomic/ClubLogo';
import ClickableText from '../atomic/ClickableText';
import { useNavigate } from 'react-router-dom';

const Post = ({
  title,
  content,
  logo,
  clubName,
  datePosted,
  userName,
  ...props
}) => {
  const navigate = useNavigate();

  return (
    <PostContainer>
      <PostHeaderContainer>
        <ContainerLeft>
          {logo && <ClubLogo src={logo} alt="Club Logo" />}
          <ClickableText
            text={clubName}
            variant="dark"
            onClick={() => navigate(`/club/${clubName}`)}
          />
        </ContainerLeft>
        <ContainerRight>
          <UserAndDate>
            Posted On {datePosted} by {userName}
          </UserAndDate>
        </ContainerRight>
      </PostHeaderContainer>
      <PostTitle>{title}</PostTitle>
    </PostContainer>
  );
};

export default Post;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  width: 100%;
`;

const PostHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const ContainerLeft = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
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
  margin-bottom: 20px;
`;

const PostTitle = styled.h1`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.fourth};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-left: 3rem;
`;
