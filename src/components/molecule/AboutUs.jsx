// Author: Torin Andrews
import React from 'react';
import styled, { keyframes } from 'styled-components';

const AboutUs = () => {
  return (
    <PageContainer>
      <TitleCenterContainer>
        <TitleContainer>
          <Header>About Us</Header>
          <SubHeader>Welcome To Club Connect</SubHeader>
        </TitleContainer>
      </TitleCenterContainer>

      <SectionContainer>
        <Section>
          <SectionImage
            src="https://www.mcgill.ca/root/redpath-final-rev.jpg"
            alt="Who We Are"
          />

          <SectionText>
            <h3>Who We Are</h3>
            <p>
              We are ClubConnect, a dedicated platform designed exclusively for
              McGill University’s vibrant club community. Our mission is to
              empower McGill clubs by providing an interactive space where they
              can connect, collaborate, and thrive. Through ClubConnect, clubs
              can effortlessly promote themselves, plan exciting events, and
              engage with fellow students. Whether you&apos;re looking to grow
              your community, organize impactful initiatives, or simply get your
              club noticed, we’re here to help you make it happen. At
              ClubConnect, we believe that the strength of McGill’s campus life
              lies in its clubs—and we’re here to amplify that energy.
            </p>
          </SectionText>
        </Section>

        <Section>
          <SectionImage
            src="https://reporter.mcgill.ca/wp-content/uploads/2022/10/McGill-Arts-fall-colours-scaled.jpg"
            alt="Why"
          />
          <SectionText>
            <h3>Why</h3>
            <p>
              At McGill, clubs are the heartbeat of campus life. They bring
              people together, spark passions, and create lasting memories. Yet,
              we know that running a club comes with its own set of
              challenges—promoting events, managing memberships, and growing
              visibility can feel overwhelming. On the other side, for the
              McGill community, finding clubs and accessing information about
              them can be just as difficult. Whether you’re a new student
              searching for the perfect club to join or someone looking to
              connect with like-minded individuals, the lack of a central hub
              makes the process frustrating and time-consuming. That’s why
              ClubConnect was created: to simplify and enhance the way McGill
              clubs operate and engage. We’re here to bridge the gap between
              clubs and the McGill community by offering a streamlined platform
              where collaboration, event planning, promotion, and discovery come
              effortlessly.
            </p>
          </SectionText>
        </Section>

        <Section>
          <SectionImage
            src="https://www.mcgill.ca/getready/files/getready/involvement_1.jpg"
            alt="What We Do"
          />
          <SectionText>
            <h3>What We Do</h3>
            <p>
              At ClubConnect, we provide a centralized platform tailored to the
              needs of McGill clubs and the wider McGill community. For clubs,
              we make it easier to manage day-to-day operations, promote events,
              and engage with members. From sharing announcements to planning
              events and showcasing your club’s mission, we give you the tools
              to shine and grow. For students, faculty, and the broader McGill
              community, we solve the challenge of finding and connecting with
              clubs. Our platform simplifies the search process, allowing you to
              discover clubs that align with your interests, explore upcoming
              events, and stay updated with the latest activities. In short,
              we’re here to bring the McGill community closer together by making
              clubs more accessible, visible, and interactive. Whether
              you&apos;re looking to join, collaborate, or simply explore,
              ClubConnect is your go-to space for everything club-related at
              McGill.
            </p>
          </SectionText>
        </Section>
      </SectionContainer>
    </PageContainer>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled components
const PageContainer = styled.div`
  padding: 2rem;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const TitleCenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const TitleContainer = styled.div`
  text-align: center;
  width: 60%;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 3rem;
  font-weight: bold;
  opacity: 0.8;
`;

const SubHeader = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  font-weight: bold;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  animation: ${fadeIn} 1s ease-out;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionImage = styled.img`
  flex: 1;
  width: 50%;
  aspect-ratio: 9 / 9;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  transition:
    transform 1s ease,
    box-shadow 1s ease;

  &:hover {
    transform: scale(1.03);

    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const SectionText = styled.div`
  flex: 1;
  text-align: left;

  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export default AboutUs;
