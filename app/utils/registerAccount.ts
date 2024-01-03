import axios from '@/libs/axios';

export interface RegisterAccountProps {
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

const RegisterAccount = (data: RegisterAccountProps) => {
  const accsessToken = document.cookie;

  axios
    .post('/users/info', data, {
      headers: { Authorization: `${accsessToken}` },
      withCredentials: true,
    })
    .then((response) => console.log('response :', response));
};

export default RegisterAccount;
