import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// TODO: Improve? Logic may not be great
const useAttemptLocal = () => {
  const navigate = useNavigate();
  const [authToken, setAuthToken] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Attempt to get vars from local storage
    const auth = localStorage.getItem('authToken');
    const Id = localStorage.getItem('userId');

    // Update the state of the vars
    setAuthToken(auth);
    setUserId(Id);

    if (!auth || !Id) {
      // Redirect to the login page if either token or userId is missing
      console.warn('No auth or Id token found in Local. Redirect to login');
      navigate('/login');
    }
  }, [navigate]);

  return { authToken, userId };
};

export default useAttemptLocal;
