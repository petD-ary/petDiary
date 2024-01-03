import axios from '@/libs/axios';

const getNicknameValidation = async (nickname: string) => {
  const response = await axios.get(`/users/nicknames/${nickname}/exists`, {
    withCredentials: true,
  });

  return response.data;
};

export default getNicknameValidation;
