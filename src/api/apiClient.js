import axios from 'axios';
import settings from '../globalSettings';

const apiBaseUrl = settings.BASE_API_URL;

// Creates the base aixios client for the API
const apiClient = axios.create({
  baseURL: apiBaseUrl, // replace with API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
