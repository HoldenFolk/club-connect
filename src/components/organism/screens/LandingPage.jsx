import React from 'react';
import styled from 'styled-components';
import { PageTemplate } from '../../template/index';
import backgroundImage from '../../../assets/backsplash.png';
import LandingTitle from '../../molecule/LandingTitle';
import Button from '../../atomic/Button';
import LandingPageHeader from '../../molecule/LandingPageHeader';

// Ladning Page Screen Component
// TODO: Test styles on diffent devices
// TOOD: Modularize into components?
export const LandingPage = () => {
	return (
		<PageTemplate>
			<LandingPageContainer>
				<LandingPageHeader/>
				<CenterContainer>
					<LandingTitle />
					<ButtonContainer> 
						<Button text='Log In' variant='fill'/>
						<Button text='Sign Up' variant='outline'/>
					</ButtonContainer>
				</CenterContainer>
			</LandingPageContainer>
		</PageTemplate>
		
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
	flex-grow: 1;
	width: 100%;
	margin-bottom: 100px;
`

const LandingPageContainer = styled.div`
	background-image: url(${backgroundImage});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	height: 100vh;
`;
