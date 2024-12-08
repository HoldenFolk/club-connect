import styled from 'styled-components';
import backgroundImage from '../../assets/backsplash.png';

export const BackgroundContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
