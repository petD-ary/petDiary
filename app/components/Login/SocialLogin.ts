import { signInWithGoogle } from "@/firebase";
import { GoogleAuthProvider } from "firebase/auth";

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
