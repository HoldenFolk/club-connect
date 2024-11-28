import React from 'react';
import styled from 'styled-components';
import { PageTemplate } from '../../template/index';
import backgroundImage from '../../../assets/backsplash.png';
import LandingTitle from '../../molecule/LandingTitle';
import Button from '../../atomic/Button';
import HorizontalHeader from '../../molecule/HorizontalHeader';
import ClickableText from '../../atomic/ClickableText'

// Ladning Page Screen Component
// TODO: Test styles on diffent devices
export const LandingPage = () => {
	return (
		<PageTemplate>
			<LandingPageContainer>
				<HorizontalHeader>
					<ClickableText text='About'/>
					<ClickableText text='Contact'/>
					<ClickableText text='Dashboard'/>
				</HorizontalHeader>
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
