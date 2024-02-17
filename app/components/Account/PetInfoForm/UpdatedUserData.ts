import axios from '@/libs/axios';

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

const updatedUserData = async (data: UpdatedUserDataProps) => {
  try {
    await axios
      .post('/users/info', data)
      .then((response) => console.log('response :', response));
  } catch (error) {
    return console.log('🚀 ~ UpdatedUserData ~ error:', error);
  }
};

export default updatedUserData;
