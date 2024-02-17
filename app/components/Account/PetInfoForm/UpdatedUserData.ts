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

<<<<<<< HEAD
const UpdatedUserData = async (data: UpdatedUserDataProps) => {
  await axios
    .post('/users/info', data)
    .then((response) => console.log('response :', response));
=======
const updatedUserData = async (data: UpdatedUserDataProps) => {
  try {
    await axios
      .post('/users/info', data)
      .then((response) => console.log('response :', response));
  } catch (error) {
    return console.log('🚀 ~ UpdatedUserData ~ error:', error);
  }
>>>>>>> 00e40bac308497415948496094ab50cd44ee8502
};

export default updatedUserData;
