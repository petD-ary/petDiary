"use client";
import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  font-size: 14px;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 13px;
  font-weight: 300;
`;

const Input = styled.input`
  width: 380px;
  padding: 20px;
  border: none;
  border-radius: 8px;
  background-color: #f0f0f0;
`;

const AccoutGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
`;

const CheckboxLabel = styled.label`
  margin-left: 10px;
`;

const SearchLink = styled.div``;

const SocialIcons = styled.div`
  width: 80%;
  margin: 0 auto 50px auto;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 20px 0;
  margin-bottom: 50px;
  background-color: #000;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const RegisterLink = styled.div`
  text-align: center;
  a {
    font-weight: 700;
  }
`;

export const Login = () => {
  return (
    <LoginContainer>
      <form action="로그인 처리 페이지 URL" method="post">
        <FormGroup>
          <Label htmlFor="username">아이디</Label>
          <Input
            type="text"
            id="username"
            name="username"
            placeholder="아이디를 입력해 주세요"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력해 주세요"
            required
          />
        </FormGroup>
        <AccoutGroup>
          <Checkbox>
            <input type="checkbox" id="remember" name="remember" />
            <CheckboxLabel htmlFor="remember">로그인 유지</CheckboxLabel>
          </Checkbox>
          <SearchLink>
            <p>아이디/비밀번호 찾기</p>
          </SearchLink>
        </AccoutGroup>

        <SubmitButton type="submit">로그인</SubmitButton>
      </form>
      <SocialIcons>
        {/* <SiNaver className="icon" />
        <RiKakaoTalkFill className="icon" />
        <FaFacebook className="icon" />
        <FaGoogle className="icon" /> */}
      </SocialIcons>
      <RegisterLink>
        <p>
          아직 회원이 아니신가요? <a href="회원가입 페이지 URL">회원가입</a>
        </p>
      </RegisterLink>
    </LoginContainer>
  );
};
