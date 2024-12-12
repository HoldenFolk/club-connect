import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAttemptLocal from './useAttemptLocal';
import { getUserById, updateUserById } from '../api/user';

// TODO: Fix multiple API calls error
const useProfileSettings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const { userId } = useAttemptLocal();
  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = async (data) => {
    try {
      await updateUserById(userId, data);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile.');
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log('User ID:', userId);
        const userData = await getUserById(userId);
        reset(userData); // Populate the form with fetched data
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserData();
  }, [reset, userId]);

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isEditing,
    setIsEditing,
  };
};

export default useProfileSettings;
