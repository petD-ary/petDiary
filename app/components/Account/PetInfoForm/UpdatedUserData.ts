import axios from 'axios';

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

const UpdatedUserData = async (data: UpdatedUserDataProps) => {
  await axios
    .post('/users/info', data, {
      withCredentials: true,
    })
    .then((response) => console.log('response :', response));
};

export default UpdatedUserData;