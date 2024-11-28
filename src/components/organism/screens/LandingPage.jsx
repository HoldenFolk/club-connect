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
				<CenterContainer>
					<LandingTitle />
					<ButtonContainer> 
						<Button text='Log In' variant='fill'/>
						<Button text='Sign Up' variant='outline'/>
					</ButtonContainer>
				</CenterContainer>
			</PageTemplate>
		</LandingPageContainer>
	);
};

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
	width: 100%;
`

const CenterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	width: 100%;
`

const LandingPageContainer = styled.div`
	background-image: url(${backgroundImage});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	min-height: 100vh;
`;
