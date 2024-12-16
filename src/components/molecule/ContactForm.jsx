import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useForm } from 'react-hook-form';
import TextField from '../atomic/TextField';
import Button from '../atomic/Button';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // TODO: Add form submission logic to API here
  const onSubmit = (e) => {
    console.log(e);
    navigate(`/success`);
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name"
          name="name"
          register={register}
          errors={errors}
          type="text"
          placeholder="Jane Doe"
        />
        <TextField
          label="Email"
          name="email"
          register={register}
          errors={errors}
          type="email"
          placeholder="Enter your email"
          validation={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
          }}
        />
        <MessageTextArea
          label="Message"
          name="message"
          {...register('message', { required: 'Message is required' })}
          placeholder="Write your feedback here..."
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          variant="fill"
          text="Submit"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </FormWrapper>
  );
};

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
  justify-content: center;
  align-items: center;
  width: 70%; /* Increased width */
  margin: 2rem auto;
  padding: 2rem; /* Increased padding */
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.fourth};
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

export default ContactForm;
