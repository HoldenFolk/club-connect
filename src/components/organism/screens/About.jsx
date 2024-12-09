import React from 'react';
import styled from 'styled-components';
import { PageTemplate } from '../../template/index';
import backgroundImage from '../../../assets/backsplash.png';
import LandingTitle from '../../molecule/LandingTitle';
import Button from '../../atomic/Button';
import LandingPageHeader from '../../molecule/LandingPageHeader';
import AboutUs from '../../molecule/AboutUs';


// TODO: Test styles on diffent devices
// TOOD: Modularize into components?
export const About = () => {
	return (
		<PageTemplate>
            <LandingPageHeader>
                <CenterContainer>
                    <AboutUs>

                    </AboutUs>
                </CenterContainer>
            </LandingPageHeader>
		</PageTemplate>
		
	);
};



const CenterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;
	margin-bottom: 100px;
`