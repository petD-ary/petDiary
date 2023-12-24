"use client";
import axios from "axios";
import router from "next/router";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Ouath = ({ socialLogin }: { socialLogin: string }) => {
  const router = useRouter();

  //   인가 코드 전송
  async function getUser() {
    try {
      const response = await axios.get(`auth/${socialLogin}`);
      console.log(response);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }
  return <div>로그인중</div>;
};

export default Ouath;
