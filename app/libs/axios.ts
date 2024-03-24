import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

export default instance;

export const mapAxios = axios.create({
  baseURL: 'https://dapi.kakao.com/v2/local',
});
