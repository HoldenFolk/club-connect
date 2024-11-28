import React from 'react';
import styled from 'styled-components';
import { PageTemplate } from '../../template/index';
import backgroundImage from '../../../assets/backsplash.png';
import LandingTitle from '../../molecule/LandingTitle';
import Button from '../../atomic/Button';

export const LandingPage = () => {
	return (
		<LandingPageContainer>
			<PageTemplate>
				<LandingTitle />
				{/* <Button/> */}
			</PageTemplate>
		</LandingPageContainer>
	);
};

const LandingPageContainer = styled.div`
	background-image: url(${backgroundImage});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	min-height: 100vh;
`;
