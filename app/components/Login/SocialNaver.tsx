import { dbService } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import React from "react";

const SocialNaver = () => {
  const NAVER_CLIENT_ID = "opgkZtCOcqRMs0wozjW3";
  const REDIRECT_URI = "http://localhost:3000/login"; // Callback URL
  const STATE = "false";
  const NAVER_AUTH_URL = `http://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

  const naverLogin = async () => {
    try {
      const response = await fetch(NAVER_AUTH_URL);
      if (response.ok) {
        const data = await response.json();
        const naverToken = data.access_token;

        // Firebase에 로그인 정보 저장
        const userDocRef = await addNaverUserToFirestore(naverToken);

        // 성공 시 알림 및 페이지 이동
        alert("로그인 성공");
        window.location.href = "/";
      } else {
        console.error("네이버 로그인 실패:", response.status);
      }
    } catch (error) {
      console.error("네이버 로그인 오류:", error);
    }
  };

  const addNaverUserToFirestore = async (naverToken: any) => {
    // Firebase Firestore에 사용자 정보 추가
    const userRef = await addUserDataToFirestore(naverToken);
    return userRef;
  };

  const addUserDataToFirestore = async (naverToken: any) => {
    // Firestore에 사용자 정보 추가
    const userCollection = collection(dbService, "users");
    const userDocRef = await addDoc(userCollection, {
      naverToken: naverToken,
      // 다른 사용자 정보도 필요한 경우 추가
    });
    return userDocRef;
  };

  return <button onClick={naverLogin}>네이버 로그인</button>;
};

export default SocialNaver;
