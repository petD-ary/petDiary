"use client";
import React, { useState } from "react";

import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";

import Input from "../Input";
import CheckButton from "@/components/Input/CheckButton";
import AuthButton from "@/components/Input/AuthButton";
import SocialButton from "@/components/Input/SocialButton";
import ShowInput from "@/components/Input/ShowInput";
import { useRouter } from "next/navigation";
import { facebookLogin, googleLogin, kakaoLogin } from "./SocialLogin";
import SocialKakao from "./SocialKakao";

export const Login = () => {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [automaticLogin, setAutomaticLogin] = useState<boolean>(false);
  const router = useRouter();

  const confirm = userId === "" || password === "";

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="w-full pt-12 pb-16 md:max-w-[380px] mx-auto text-1.4rem">
      <form onSubmit={handleSubmit} action="로그인 처리 페이지 URL" method="post">
        <Input
          label="이메일"
          type="text"
          value={userId}
          setValue={(value: string) => setUserId(value)}
          placeholder="이메일을 입력해 주세요"
          required
        />

        <ShowInput
          label="비밀번호"
          type={showPassword ? "text" : "password"}
          value={password}
          setValue={(value: string) => setPassword(value)}
          placeholder="비밀번호를 입력해 주세요"
          required
          handleChangeType={togglePassword}
          showPassword={showPassword}
        />

        <div className="flex justify-between pt-5">
          <CheckButton label="로그인 유지" checked={automaticLogin} setState={setAutomaticLogin} />
          <p className="text-sm">아이디/비밀번호 찾기</p>
        </div>

        <AuthButton type="submit" content="로그인" disabled={confirm} />
      </form>

      <div className="w-4/5 mx-auto my-12 flex justify-between gap-3">
        <SocialButton type={"button"} content={<GrGooglePlus />} onClick={() => googleLogin(router)} />
        <SocialButton type={"button"} content={<FaFacebook />} onClick={() => facebookLogin(router)} />
        <SocialButton type={"button"} content={"네"} />
        <SocialKakao />
      </div>

      <div className="text-center text-sm">
        <p>
          아직 회원이 아니신가요?
          <a className="ml-[6px] font-semibold underline" href="/account">
            회원가입
          </a>
        </p>
      </div>
    </div>
  );
};
