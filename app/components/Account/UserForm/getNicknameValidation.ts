import axios from '@/libs/axios';

const getNicknameValidation = async (nickname: string) => {
  const response = await axios.get(`/users/nicknames/${nickname}/exists`);

  return response.data;
};

export default getNicknameValidation;
