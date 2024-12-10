import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import TextField from '../atomic/TextField';
import Button from '../atomic/Button';
import { logInUser } from '../../api/user';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (e) => {
    try {
      const res = await logInUser(e);
      console.log(res);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>Login</FormHeader>
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
        <TextField
          label="Password"
          name="password"
          register={register}
          errors={errors}
          type="password"
          placeholder="Enter your password"
          validation={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
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

export default LoginForm;

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
