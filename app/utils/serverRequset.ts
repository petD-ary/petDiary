import axios from '@/libs/axios';
import instance from '@/libs/axios';

const fetchUserAuthInfo = async (cookie: any) => {
  try {
    const response = await instance.get('api/users');
    return response.data; // 인증 정보를 반환합니다.
  } catch (error) {
    console.error('Authentication error:', error);
    return null;
  }
};

export async function getServerSideProps(context: { req: any }) {
  const { req } = context;
  const cookie = req.headers.cookie || '';

  const user = await fetchUserAuthInfo(cookie);

  return {
    props: {
      user,
    },
  };
}
