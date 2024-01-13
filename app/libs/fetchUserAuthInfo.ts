import axios from 'axios';
import { cookies } from 'next/headers';
import instance from './axios';

export async function getUser() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  try {
    const response = await instance('/users', {
      headers: { cookie: `accessToken=${accessToken?.value}` },
    });
    return response.data;
  } catch {
    return undefined;
  }
}

// async function getUser() {
//   const cookieStore = cookies();
//   const accessToken = cookieStore.get('accessToken');
//   try {
//     const response = await axios('/users',
//       { headers: { cookie: `accessToken=${accessToken?.value}` } }
//     );
//     return response.data;
//   } catch {
//     return undefined;
//   }
// }

// getServerSideProps 함수 사용

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // context 객체를 통해 서버 사이드 컨텍스트에 접근
//   const userToken = context.req.cookies.userToken;

//   // userToken을 사용하여 필요한 데이터 패칭
//   const data = await loader(userToken);

//   // 페이지 컴포넌트에 props로 데이터 전달
//   return { props: { data } };
// };

// export async function loader(userToken: string | undefined) {
//   try {
//     const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {
//       headers: {
//         Authorization: `Bearer ${userToken}`,
//       },
//       withCredentials: true,
//     });

//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }
