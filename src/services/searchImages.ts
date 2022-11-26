import api from './api';
import Config from 'react-native-config';

export const getImages = async (text: string) => {
  try {
    const response = await api.get(`/api/?key=${Config.PIXABAY_KEY}&q=${encodeURIComponent(text)}`);
    return response; 
  } catch (err) {
  }
}