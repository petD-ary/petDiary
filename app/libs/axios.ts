import axios from 'axios';

import { getToken } from '@/utils/getToken';

const instance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // accessToken 만료 확인
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const accessToken = await getToken('accessToken');
      if (!accessToken) {
        try {
          await instance.post('/auth/token');

          return instance(originalRequest);
        } catch (e) {
          console.error('Refresh token is invalid or expired', e);
          // 필요시 로그아웃 처리 등 추가 작업 수행
          return Promise.reject(e);
        }
      }
    }

    return Promise.reject(error);
  },
);

export default instance;

export const mapAxios = axios.create({
  baseURL: 'https://dapi.kakao.com/v2/local',
});
