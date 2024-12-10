export const saveAuthTokenLocal = (token) => {
  if (token) {
    localStorage.setItem('authToken', token);
  } else {
    console.warn('Attempted to save an undefined or null token');
  }
};

export const getAuthTokenLocal = () => {
  return localStorage.getItem('authToken');
};
