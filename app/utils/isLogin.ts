import instance from '@/libs/axios';
import axios from '@/libs/axios';

const isLogin = async (email: string, password: string) => {
  const data = { email: email, password: password };

  await axios.post('/users/login', data, {});
};

export default isLogin;
