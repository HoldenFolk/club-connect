import React from 'react';
import styled from 'styled-components';

// Header component that aligns children horizontally
const HorizontalHeader = ({children}) => {
    return (
        <HeaderDiv>
            {children}
        </HeaderDiv>
    );
};

const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 100%;
    margin-top: 30px;
`;

export default HorizontalHeader;