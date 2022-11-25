import api from './api';
import Config from 'react-native-config';

export const getImages = async (text: string) => {
  try {
    const response = await api.get(`?key=${Config.PIXABAY_KEY}&q=${encodeURIComponent(text)}`);
    console.tron.log({response})
    return response; 
  } catch (err) {
    console.tron.log({err})
  }
}