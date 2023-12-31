import axios from '@/libs/axios';

export interface RegisterAccountProps {
  user: {
    nickName: string;
    email: string;
    password: string;
  };
  pet: {
    petType: string;
    breed: string;
    name: string;
    gender: 'male' | 'female';
    neutered: boolean;
    birthday?: string;
    adoptionDate?: string;
    weight: string;
  };
}

const RegisterAccount = (nickName: string, email: string, password: string) => {
  const data = {
    user: { nickname: nickName, email, password },
    pet: {
      petType: 'cat',
      breed: 'cute',
      name: 'momomomo',
      gender: 'female',
      neutered: false,
      birthday: '2023-12-17',
      adoptionDate: '',
      weight: '5',
    },
  };

  axios
    .post('/users/signup', data)
    .then((response) => console.log('response :', response));
};

export default RegisterAccount;
