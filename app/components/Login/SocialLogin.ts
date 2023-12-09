import { authService, signInWithFacebook, signInWithGoogle } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import KakaoLogin from "react-kakao-login";

// 구글 로그인
export const googleLogin = () => {};

// 페이스북 로그인
export const facebookLogin = () => {};

//네이버 로그인

export const naverLogin = () => {};

// 카카오 로그인
const REST_API_KEY = "-";
const REDIRECT_URI = "-";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const kakaoLogin = () => {
  window.location.href = KAKAO_AUTH_URL;
};
