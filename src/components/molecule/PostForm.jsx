import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '../atomic/TextField';
import Button from '../atomic/Button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../api/posts';
import useAttemptLocal from '../../hooks/useAttemptLocal';
import { useParams } from 'react-router-dom';

const PostForm = () => {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState('');
  const { authToken } = useAttemptLocal();
  const { clubName } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (e) => {
    setApiError(''); // Clear previous errors before submitting
    e.clubName = clubName;
    try {
      const res = await createPost(e, authToken);
      console.log('Post Response: ', res);
      navigate(`/club/${clubName}`);
    } catch (error) {
      console.log('Error Response', error.response);
      setApiError(
        error.response?.data?.error ||
          'An unexpected error occurred. Please try again.'
      );
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>Create Post</FormHeader>

        {apiError && <ErrorMessage>{apiError}</ErrorMessage>}

        <TextField
          label="Title"
          name="title"
          register={register}
          errors={errors}
          type="title"
          placeholder="Enter a Post Title"
          validation={{
            required: 'Title is Required',
          }}
        />
        <MessageTextArea
          label="Text"
          name="text"
          {...register('text', { required: 'Post Text is Required' })}
          placeholder="Post Text Here"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="fill"
          text="submit"
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </FormWrapper>
  );
};

export default PostForm;

const FormHeader = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin-top: 2rem;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.fourth};
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error || 'red'};
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
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
