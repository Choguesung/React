import { setItems } from './items.js';
import axios from 'axios';

export const fetchData = () => async dispatch => {
  try {
    const response = await axios.get('http://13.124.53.73/');
    dispatch(setItems(response.data)); // 받아온 데이터로 상태 업데이트
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};
