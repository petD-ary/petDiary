// 카카오톡
const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
const KAKAO_CALLBACK_URL = process.env.NEXT_PUBLIC_KAKAO_CALLBACK_URL;
const kakaolink = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_CALLBACK_URL}&response_type=code`;

export const kakaoLogin = () => {
  window.location.href = kakaolink;
};

// 구글
const GOOGLE_REST_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const GOOGLE_CALLBACK_URL = process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL;
const googlelink = `https://accounts.google.com/o/oauth2/v2/auth?scope=profile&response_type=code&client_id=${GOOGLE_REST_CLIENT_ID}&redirect_uri=${GOOGLE_CALLBACK_URL}`;

export const googleLogin = () => {
  window.location.href = googlelink;
};

// 네이버
const NAVER_REST_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
const NAVER_CALLBACK_URL = process.env.NEXT_PUBLIC_NAVER_CALLBACK_URL;
const naverlink = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_REST_CLIENT_ID}&redirect_uri=${NAVER_CALLBACK_URL}&response_type=code`;

export const naverLogin = () => {
  window.location.href = naverlink;
};
