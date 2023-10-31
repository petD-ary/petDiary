"use client";
import React, { useState } from "react";

import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import Input from "../Input";
import CheckButton from "../Input/CheckButton";
import AuthButton from "../Input/AuthButton";
import SocialButton from "../Input/SocialButton";

import { LoginContainer, AccoutGroup, SocialIcons, RegisterLink } from "./styled";

export const Login = () => {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [automaticLogin, setAutomaticLogin] = useState<boolean>(false);

  const confirm = userId === "" || password === "";

  return (
    <div className="w-full pt-12 pb-16 md:max-w-2xl mx-auto text-1.4rem">
      <form action="로그인 처리 페이지 URL" method="post">
        <Input
          label="아이디"
          type="text"
          value={userId}
          setValue={(value: string) => setUserId(value)}
          placeholder="아이디를 입력해 주세요"
          required
        />
        <Input
          label="비밀번호"
          type="password"
          value={password}
          setValue={(value: string) => setPassword(value)}
          placeholder="비밀번호를 입력해 주세요"
          required
        />
        <div className="flex justify-between">
          <CheckButton label="로그인 유지" checked={automaticLogin} setState={setAutomaticLogin} />
          <p>아이디/비밀번호 찾기</p>
        </div>
        <AuthButton type="submit" content="로그인" disabled={confirm} />
      </form>
      <div className="w-4/5 mx-auto my-20 flex justify-between ">
        <SocialButton type={"button"} content={""} />
        <SocialButton type={"button"} content={""} />
        <SocialButton type={"button"} content={""} />
        <SocialButton type={"button"} content={""} />
      </div>
      <div className="text-center">
        <p>
          아직 회원이 아니신가요?
          <a className="ml-4 font-bold underline" href="/account">
            회원가입
          </a>
        </p>
      </div>
    </div>
  );
};
