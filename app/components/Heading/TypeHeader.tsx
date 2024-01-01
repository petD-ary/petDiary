import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logo/pd_logo.png";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { stepState } from "@/recoil/Account/atoms";
import IconBtnWrapper from "../Button/IconBtnWrapper";
import IconX from "@/assets/images/Icon-x.svg";
import IconBell from "@/assets/images/Icon-bell.svg";
import IconLeft from "@/assets/images/icon-left.svg";
import IconSearch from "@/assets/images/icon-search.svg";

//Close
export const CloseHeader = () => (
  <header className="w-full md:max-w-3xl h-14 mx-auto px-2 py-1 flex items-center justify-end">
    <IconBtnWrapper onClick={() => {}}>
      <IconX />
    </IconBtnWrapper>
  </header>
);

// account header => 페이지가 아니라 step인데 이 부분은 어떻게 처리 해야하는가
// 반려동물 정보입력을 페이지 이동으로 시켜야하는가

const AccountHeader = () => {
  const router = useRouter();
  const [step, setStep] = useRecoilState(stepState);

  const handleClickRoute = () => {
    if (step > 0 && step <= 2) {
      return setStep((prev) => prev - 1);
    } else if (step === 0) {
      return router.back();
    }
  };

  return (
    <div className={`w-full flex ${step !== 0 ? "justify-between" : "justify-end"}`}>
      {step !== 0 ? (
        <button type="button" onClick={handleClickRoute} className="p-4">
          <IconLeft />
        </button>
      ) : null}

      <IconBtnWrapper onClick={() => router.push("/login")}>
        <IconX />
      </IconBtnWrapper>
    </div>
  );
};

//Back
export const BackHeader = () => {
  return (
    <header className="w-full md:max-w-3xl h-14 mx-auto px-2 py-1 items-center">
      <IconBtnWrapper onClick={() => {}}>
        <IconLeft />
      </IconBtnWrapper>
    </header>
  );
};

//BackClose
export const BackCloseHeader = () => {
  return (
    <header className="w-full md:max-w-3xl h-14 mx-auto px-2 py-1 flex items-center justify-between ">
      <IconBtnWrapper onClick={() => {}}>
        <IconLeft />
      </IconBtnWrapper>
      <IconBtnWrapper onClick={() => {}}>
        <IconX />
      </IconBtnWrapper>
    </header>
  );
};

//Alert
export const AlertHeader = () => {
  return (
    <header className="w-full md:max-w-3xl h-14 mx-auto px-2 py-1 flex items-center justify-between ">
      <Link href="/" className="px-3">
        <Image src={logo.src} alt="Pet diary logo" width={75} height={18} />
      </Link>
      <IconBtnWrapper onClick={() => {}}>
        <IconBell />
      </IconBtnWrapper>
    </header>
  );
};

//Interactive
export const InteractiveHeader = () => {
  return (
    <header className="w-full md:max-w-3xl h-14 mx-auto px-2 py-1 flex items-center justify-between ">
      <Link href="/" className="px-3">
        <Image src={logo.src} alt="Pet diary logo" width={75} height={18} />
      </Link>
      <div>
        <IconBtnWrapper onClick={() => {}}>
          <IconBell />
        </IconBtnWrapper>
        <IconBtnWrapper onClick={() => {}}>
          <IconSearch />
        </IconBtnWrapper>
      </div>
    </header>
  );
};

//login
export const LogoHeader = () => {
  return (
    <header className="w-full md:max-w-3xl h-14 mx-auto px-2 py-1 flex items-center">
      <Link href="/" className="px-3">
        <Image src={logo.src} alt="Pet diary logo" width={75} height={18} />
      </Link>
    </header>
  );
};
