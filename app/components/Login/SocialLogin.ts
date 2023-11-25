import { authService, signInWithFacebook, signInWithGoogle } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import KakaoLogin from "react-kakao-login";

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

// 카카오 로그인
export const kakaoClientId = "a6aa60048bdaaa66d87d253b08a66ba3";

//네이버 로그인

// const express = require("express");
// const { createProxyMiddleware } = require("http-proxy-middleware");

// const app = express();

// app.use("/api", createProxyMiddleware({ target: "https://nid.naver.com", changeOrigin: true }));

// app.listen(3000, () => {
//   console.log("프록시 서버가 3000 포트에서 실행 중입니다.");
// });
