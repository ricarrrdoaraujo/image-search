import api from './api';
import Config from 'react-native-config';

export const getImages = async (text: string, page?: number): Promise<any> =>  {
  try {
    const response = await api
      .get(`/api/?key=${Config.PIXABAY_KEY}&q=${encodeURIComponent(text)}${page && '&page=' + String(page)}`);
    return response; 
  } catch (err) {
    if(err.status == 429) {
      return {message: `You've reached the search rate limit`};
    }
  }
}