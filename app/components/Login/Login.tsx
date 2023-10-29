"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Input";
import CheckButton from "../Input/CheckButton";
import AuthButton from "../Input/AuthButton";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import SocialButton from "../Input/SocialButton";

const LoginContainer = styled.div`
  width: 100%;
  padding: 48px 0 64px;
  margin: 0 auto;
  font-size: 1.4rem;
  max-width: 500px;
`;

const AccoutGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const SocialIcons = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
`;

const RegisterLink = styled.div`
  text-align: center;
  a {
    font-weight: 500;
    text-decoration: underline;
  }
`;

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
          아직 회원이 아니신가요? <a href="회원가입 페이지 URL">회원가입</a>
        </p>
      </RegisterLink>
    </LoginContainer>
  );
};
