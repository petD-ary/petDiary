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
    <LoginContainer>
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
        <AccoutGroup>
          <CheckButton label="로그인 유지" checked={automaticLogin} setState={setAutomaticLogin} />
          <p>아이디/비밀번호 찾기</p>
        </AccoutGroup>
        <AuthButton type="submit" content="로그인" disabled={confirm} />
      </form>
      <SocialIcons>
        <SocialButton type={"button"} content={""} />
        <SocialButton type={"button"} content={""} />
        <SocialButton type={"button"} content={""} />
        <SocialButton type={"button"} content={""} />
      </SocialIcons>
      <RegisterLink>
        <p>
          아직 회원이 아니신가요? <a href="/account">회원가입</a>
        </p>
      </RegisterLink>
    </LoginContainer>
  );
};
