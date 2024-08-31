import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

export default instance;

export const mapAxios = axios.create({
  baseURL: 'https://dapi.kakao.com/v2/local',
});
