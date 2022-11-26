import api from './api';
import Config from 'react-native-config';

export const getImages = async (text: string, page?: number) => {
  try {
    const response = await api
      .get(`/api/?key=${Config.PIXABAY_KEY}&q=${encodeURIComponent(text)}${page && '&page=' + String(page)}`);
    return response; 
  } catch (err) {
  }
}