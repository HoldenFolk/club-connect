export const saveAuthTokenLocal = (token) => {
  if (token) {
    localStorage.setItem('authToken', token);
  } else {
    console.warn('Attempted to save an undefined or null token in local');
  }
};

export const saveUserIdLocal = (userId) => {
  if (userId) {
    localStorage.setItem('userId', userId);
  } else {
    console.warn('Attempted to save an undefined or null token in local');
  }
};
