import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAttemptLocal from './useAttemptLocal';
import { getUserById, updateUserById } from '../api/user';

const useProfileSettings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const { userId } = useAttemptLocal();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({});

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
        // Do not run API call if userId is empty
        if (!userId) return;
        const userData = await getUserById(userId);
        reset(userData); // Populate the form with fetched data
        setUserData(userData);
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
    userData,
  };
};

export default useProfileSettings;
