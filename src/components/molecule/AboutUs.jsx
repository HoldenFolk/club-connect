import React from 'react';
import styled, { keyframes } from 'styled-components';

const AboutUs = () => {
  return (
    <PageContainer>
      <TitleCenterContainer>
        <TitleContainer>
          <Header>About Us</Header>
          <SubHeader>Welcome To My Clubs</SubHeader>
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
              Duis eget cursus justo, id facilisis purus. Suspendisse ante
              purus, ultricies et pulvinar sed, pellentesque ac neque. Nunc sem
              nulla, consectetur quis tellus et, sagittis sagittis metus.
              Pellentesque molestie metus ac eros dictum ultricies. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Maecenas posuere eget
              tellus a porttitor. Praesent feugiat mollis elit, vitae mattis
              arcu consequat vitae. Nam sagittis mauris id elementum rutrum.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eget condimentum erat, imperdiet laoreet leo. Mauris faucibus nunc
              sem, at tincidunt diam eleifend semper. Nulla facilisi. Aenean
              efficitur maximus lorem, vel maximus odio facilisis vel. Phasellus
              pellentesque nisi vitae ultricies facilisis. Quisque cursus lectus
              nec ante volutpat, ut porta massa porta. Proin consectetur ex quis
              auctor placerat. Fusce et tempus arcu. Sed pretium urna accumsan
              elit dictum consectetur. Donec volutpat accumsan arcu, non
              fringilla ex ultrices et. Integer gravida magna dui, ut vestibulum
              odio condimentum ut. Sed sagittis rutrum odio, ac lobortis orci.
              Suspendisse vel pellentesque nulla, vel convallis nisl.
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
              Mauris eu mi non diam semper auctor vitae id turpis. Aenean lorem
              purus, hendrerit non molestie at, cursus sit amet risus.
              Suspendisse potenti. Cras arcu ante, pellentesque non velit vitae,
              pellentesque congue dui. Nulla faucibus auctor magna, sit amet
              auctor ipsum sodales non. Nunc ut aliquam dui. Nullam vel interdum
              augue, et interdum ipsum. Aenean porta efficitur pulvinar.
              Praesent et rhoncus risus. Nam suscipit velit eu ex interdum, non
              imperdiet ipsum blandit. Fusce at commodo purus.
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
