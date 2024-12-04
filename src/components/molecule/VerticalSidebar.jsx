import React from 'react';
import styled from 'styled-components'
import Logo from '../atomic/Logo';
import Icon from '../atomic/Icon';
import { faSearch, faCalendar, faHome } from '@fortawesome/free-solid-svg-icons';

const VerticalSidebar = () => {
    return (
        <VerticalDiv>
            <Logo variant='black' height={130}/>
            <Icon icon={faSearch} alt='Search Icon' text='Search' />
            <Icon icon={faCalendar} alt='Calendar Icon' text='Events' />
            <Icon icon={faHome} alt='Post Icon' text='Events' />
        </VerticalDiv>
    )
};

export default VerticalSidebar;


const VerticalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* x-offset, y-offset, blur-radius, spread-radius, color */
  min-height: 100vh;
  row-gap: 1.5rem;
`;
