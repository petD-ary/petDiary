import axios from '@/libs/axios';

export const reissueAccessToken = async () => {
  try {
    const config = {
      method: 'POST',
      url: '/auth/token',
    };

    return await axios(config);
  } catch (error) {
    console.log('🚀 ~ reissueAccessToken ~ error:', error);
    return undefined;
  }
};
