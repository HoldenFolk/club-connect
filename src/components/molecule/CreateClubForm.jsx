import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useForm } from 'react-hook-form';
import TextField from '../atomic/TextField';
import Button from '../atomic/Button';
import { useNavigate } from 'react-router-dom';
import ImageUpload from '../atomic/ImageUpload';
import { createClub } from '../../api/club/index';
import useAttemptLocal from '../../hooks/useAttemptLocal';

const CreateClubForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // TODO: Replace with API call
  const onSubmit = async (e) => {
    e.logo = '';
    e.banner = '';
    try {
      console.log('Token being sent:', authToken);
      const res = await createClub(e, authToken);
      console.log(res);
    } catch (error) {
      console.log(error.response);
    }
  };
  const navigate = useNavigate();
  const { authToken } = useAttemptLocal();
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Club Name"
          name="name"
          register={register}
          errors={errors}
          type="text"
          placeholder="My Club"
          validation={{ required: 'Name is required' }}
        />
        <MessageTextArea
          label="Description"
          name="description"
          {...register('description', { required: 'Description is required' })}
          placeholder="What is your club about?"
        />
        <TextField
          label="Faculty"
          name="category"
          register={register}
          errors={errors}
          type="text"
          validation={{ required: 'Faculty is required' }}
          placeholder="Your club faculty"
        />
        {/* TODO: ADD IMAGE UPLOAD FOR BANNER */}
        {/* TODO: ADD IMAGE UPLOAD FOR LOGO */}

        <TextField
          label="Instagram"
          name="website"
          register={register}
          errors={errors}
          type="text"
          placeholder="Instagram account URL"
        />
        <TextField
          label="Email"
          name="email"
          register={register}
          errors={errors}
          validation={{ required: 'Email is required' }}
          type="text"
          placeholder="Your email"
        />
        <ButtonWrapper>
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="fill"
            text="Create"
            //onClick={() => navigate('/profile')}
          >
            {isSubmitting ? 'Creating...' : 'Create'}
          </Button>
        </ButtonWrapper>
      </form>
    </FormWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
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

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%; /* Increased width */
  margin: 2rem auto;
  padding: 2rem; /* Increased padding */
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.black};
  animation: ${fadeIn} 1s ease-out;
`;

const MessageTextArea = styled.textarea`
  width: 100%;
  height: 150px; /* Larger height for messages */
  padding: 1rem;
  margin: 1rem 0;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  resize: none; /* Prevent resizing */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition:
    transform 1s ease,
    box-shadow 1s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary};
    transform: scale(1.03);
  }
`;
export default CreateClubForm;
