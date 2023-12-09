"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
const axios = require("axios");

const Redirection = () => {
  let KAKAO_AUTH_CODE = new URL(window.location.href).searchParams.get("code");
  const router = useRouter();
  //   인가 코드 전송
  async function postCode() {
    try {
      const response = await axios.post("주소", { KAKAO_AUTH_CODE });
      router.push("/");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    postCode();
  }, []);

  return <div>로그인중</div>;
};

export default Redirection;
