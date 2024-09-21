import fetchApi from '../fetchApi';

export interface UpdatedUserDataProps {
  user: {
    nickname: string;
  };
  pet: {
    petType: string;
    breed: string;
    name: string;
    gender: string;
    neutered: boolean;
    birthday?: string;
    adoptionDate?: string;
    weight: string;
  };
}

export const getNicknameValidation = async (nickname: string) => {
  return (await fetchApi(`/users/nicknames/${nickname}/exists`, 'GET'))?.data;
};

export const getUser = async () => {
  return (await fetchApi(`/users`, 'GET'))?.data;
};

export const updatedUserData = async (data: UpdatedUserDataProps) => {
  return await fetchApi('/users/info', 'POST', data);
};

export const putNickname = async (nickname: string) => {
  return await fetchApi(`/users/nickname`, 'PUT', { nickname });
};

export const logout = async () => {
  return fetchApi('/users/logout', 'POST');
};
