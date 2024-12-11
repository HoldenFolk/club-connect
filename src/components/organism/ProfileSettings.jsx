import React from 'react';
import styled from 'styled-components';
import TextField from '../atomic/TextField';
import Button from '../atomic/Button';
import useProfileSettings from '../../hooks/useProfileSettings';

// TODO: Add unsaved changes Logic
const ProfileSettings = () => {
  const {
    onSubmit,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isEditing,
    setIsEditing,
  } = useProfileSettings();

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>Profile Settings</FormHeader>

        <TextField
          label="Email"
          name="email"
          register={register}
          errors={errors}
          type="email"
          placeholder="Enter your email"
          validation={{
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@(mail\.mcgill\.ca|mcgill\.ca)$/,
              message:
                'Invalid email address (must be @mail.mcgill.ca or @mcgill.ca)',
            },
          }}
        />

        <TextField
          label="Username"
          name="username"
          register={register}
          errors={errors}
          type="text"
          placeholder="Enter your username"
          validation={{
            minLength: {
              value: 6,
              message: 'Username must be at least 6 characters',
            },
          }}
        />

        <TextField
          label="Password"
          name="password"
          register={register}
          errors={errors}
          type="password"
          placeholder="Change Password"
          validation={{
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
        />

        <ButtonContainer>
          {isEditing ? (
            <>
              <Button
                type="button"
                disabled={isSubmitting}
                variant="outline"
                text="Cancel"
                onClick={(e) => {
                  e.preventDefault();
                  setIsEditing(false);
                }}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="fill"
                text={isSubmitting ? 'Saving...' : 'Save Changes'}
              />
            </>
          ) : (
            <Button
              type="button"
              disabled={isSubmitting}
              variant="fill"
              text="Edit"
              onClick={(e) => {
                e.preventDefault();
                setIsEditing(true);
              }}
            />
          )}
        </ButtonContainer>
      </form>
    </FormWrapper>
  );
};

export default ProfileSettings;

const FormHeader = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  max-width: 400px;
  padding: 2rem;
  border: 1px solid #ddd;
  margin-top: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.fourth};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 1rem;
`;
