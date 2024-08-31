'use client';

import axios from 'axios';

const origin =
  process.env.NODE_ENV === 'production'
    ? `?origin=${process.env.NEXT_PUBLIC_ORIGIN_URL}`
    : `?origin=${process.env.NEXT_PUBLIC_DEV_ORIGIN_URL}`;

// 카카오톡
const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
const KAKAO_CALLBACK_URL = process.env.NEXT_PUBLIC_KAKAO_CALLBACK_URL + origin;
export const kakaolink = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_CALLBACK_URL}&response_type=code`;

// 구글
const GOOGLE_REST_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const GOOGLE_CALLBACK_URL =
  process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL + origin;
export const googlelink = `https://accounts.google.com/o/oauth2/v2/auth?scope=profile&response_type=code&client_id=${GOOGLE_REST_CLIENT_ID}&redirect_uri=${GOOGLE_CALLBACK_URL}`;

// 네이버
const NAVER_REST_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
const NAVER_CALLBACK_URL = process.env.NEXT_PUBLIC_NAVER_CALLBACK_URL + origin;
export const naverlink = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_REST_CLIENT_ID}&redirect_uri=${NAVER_CALLBACK_URL}&response_type=code`;

// 유저 정보 요청
export const userData = async () => {
  try {
    const response = await axios.get('/users/login');
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
