"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IconWrapper, TitleWrapper } from "./styled";
import Image from "next/image";
import backBtn from "@/assets/images/backBtn.png";

const Heading = ({ title }: { title: string }) => {
  const router = useRouter();

  return (
    <TitleWrapper title={title}>
      {title === "회원가입" ? (
        <IconWrapper onClick={() => router.back()}>
          <Image
            src={backBtn}
            alt="뒤로 가기"
            fill
            sizes="100%"
            style={{ objectFit: "contain" }}
            priority
          />{" "}
        </IconWrapper>
      ) : null}

      <h2>{title}</h2>
    </TitleWrapper>
  );
};

export default Heading;
