// Author: Holden Folk
import React from 'react';
import styled from 'styled-components';
import Button from '../atomic/Button';
import { theme } from '../../styles/constants';

const DeleteConfirmationPopup = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Popup>
        <PopupHeader>Confirm Deletion</PopupHeader>
        <PopupMessage>
          Are you sure you want to delete your profile? This action cannot be
          undone.
        </PopupMessage>
        <ButtonContainer>
          <Button
            variant="outline"
            color={theme.colors.fourth}
            text="Cancel"
            onClick={onClose}
          />
          <Button
            variant="fill"
            color="red"
            text="Delete"
            onClick={onConfirm}
          />
        </ButtonContainer>
      </Popup>
    </Overlay>
  );
};

export default DeleteConfirmationPopup;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Popup = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const PopupHeader = styled.h2`
  font-size: 1.5rem;
  color: #dc3545;
  margin-bottom: 1rem;
`;

const PopupMessage = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.fourth};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
