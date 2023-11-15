import { signInWithFacebook, signInWithGoogle } from "@/firebase";
import { GoogleAuthProvider } from "firebase/auth";

// 구글 로그인
export const googleLogin = (router: any) => {
  signInWithGoogle()
    .then((res) => {
      // const credential = GoogleAuthProvider.credentialFromResult(res);
      // const token = credential.accessToken;
      // const userName = res.user.displayName;
      // setToken(token);
      // setUserName(userName);
      console.log("로그인 성공");
      router.push("/");
    })
    .catch((error) => {
      console.error(error);
      console.log("로그인 실패");
    });
};

// 페이스북 로그인
export const facebookLogin = (router: any) => {
  signInWithFacebook()
    .then((res) => {
      // const user = res.user;
      // const credential = FacebookAuthProvider.credentialFromResult(res);
      // const accessToken = credential.accessToken;
      console.log("로그인 성공");
      router.push("/");
    })
    .catch((error) => {
      console.error(error);
      console.log("로그인 실패");
    });
};

// 카카오톡 로그인
const Rest_api_key = process.env.KAKAO_REST_API_KEY; //REST API KEY
const kakaoClientId = process.env.KAKAO_JAVASCRIPT_KEY;
const redirect_uri = "http://localhost:3000/auth"; //Redirect URI
// oauth 요청 URL
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
export const kakaoLogin = () => {
  window.location.href = kakaoURL;
};
const code = new URL(window.location.href).searchParams.get("code");

const kakaoOnSuccess = async (data: { response: { access_token: any } }) => {
  console.log(data);
  const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달
};
const kakaoOnFailure = (error: any) => {
  console.log(error);
};
