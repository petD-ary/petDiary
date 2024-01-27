import { instance } from '@/libs/axios';

const getNicknameValidation = async (nickname: string) => {
  const response = await instance(`/users/nicknames/${nickname}/exists`, {
    withCredentials: true,
  });

  return response.data;
};

export default getNicknameValidation;
