"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Redirection = () => {
  const router = useRouter();
  useEffect(() => {
    let KAKAO_AUTH_CODE = new URL(window.location.href).searchParams.get("code");
    router.push("/");
  }, []);
  return <div>로그인중</div>;
};

export default Redirection;
