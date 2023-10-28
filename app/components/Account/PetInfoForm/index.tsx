"use client";

import Input from "@/components/Input";
import TypeButton from "@/components/Input/\bTypeButton";
import AuthButton from "@/components/Input/AuthButton";
import React, { useState } from "react";
import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";

const FormContainer = styled.div`
  width: 100%;
  padding: 48px 0 64px;
  margin: 0 auto;
`;

const SelectBox = styled.div`
  display: flex;
  gap: 12px;
  > * {
    flex: 1;
    height: 60px;
    border-radius: 8px;
  }
`;

const CheckBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  /* 숨겨진 기본 체크박스 숨기기 */
  input[type="checkbox"] {
    display: none;
  }

  /* 커스텀 체크박스 스타일링 */
  label[for="customCheckbox"] {
    display: inline-block;
    width: 22px;
    height: 22px;
    margin-right: 8px;
    background-color: #f0f0f0;
    border-radius: 4px;
    cursor: pointer;
  }

  /* 체크된 경우 스타일 변경 */
  input[type="checkbox"]:checked + label[for="customCheckbox"] {
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;

  label {
    display: block;
    margin-bottom: 13px;
    font-size: 14px;
  }

  select {
    position: relative;
    width: 100%;
    padding: 20px;
    background: #f0f0f0;
    border-radius: 8px;
    outline: none;
    border-radius: 5px;
    -webkit-appearance: none;
    appearance: none;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      right: 12px;
      width: 20px;
      height: 20px;
      background: #ff0000; /* checkbox 비활성화 배경색 */
      border: 1px solid #000;
      border-radius: 4px;
      transform: translateY(-50%);
      pointer-events: none;
      z-index: 10;
    }

    /* 선택된 경우 checkbox 스타일 변경 */
    &:checked::before {
      background: #000; /* checkbox 활성화 배경색 */
      border: 1px solid #000; /* checkbox 활성화 테두리 색상 */
    }
  }

  button.active {
    background-color: #000;
    color: white;
  }

  button {
    display: inline-block;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const PetInForm = () => {
  const [petType, setPetType] = useState("");
  const [breed, setBreed] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [neutered, setNeutered] = useState(false);
  const [birthday, setBirthday] = useState("");
  const [adoptionDate, setAdoptionDate] = useState("");
  const [weight, setWeight] = useState("");

  const confirm = petType === "" || name === "" || breed === "" || birthday === "";

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // 여기에서 폼 데이터를 처리하거나 서버로 전송합니다.
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label>반려동물*</label>
          <SelectBox>
            <TypeButton type="강아지" selectedType={petType} setType={setPetType} />
            <TypeButton type="고양이" selectedType={petType} setType={setPetType} />
          </SelectBox>
        </FormGroup>

        <FormGroup>
          <label>품종*</label>
          <select value={breed} onChange={(e) => setBreed(e.target.value)}>
            <option value="">선택</option>
            <option value="푸들">푸들</option>
            <option value="불독">불독</option>
            <option value="리트리버">리트리버</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>성별*</label>
          <SelectBox>
            <TypeButton type="남아" selectedType={gender} setType={setGender} />
            <TypeButton type="여아" selectedType={gender} setType={setGender} />
          </SelectBox>
        </FormGroup>

        <FormGroup>
          <CheckBox>
            <input
              type="checkbox"
              id="customCheckbox"
              checked={neutered}
              onChange={(e) => setNeutered(e.target.checked)}
            />
            <label htmlFor="customCheckbox">
              {/* 아이콘이 체크된 경우 표시 */}
              {neutered ? <BsCheckLg /> : null}
            </label>
            <label>중성화를 했어요</label>
          </CheckBox>
        </FormGroup>

        <Input
          label="생일*"
          type="date"
          value={birthday}
          setValue={(value: string) => setBirthday(value)}
        />

        <Input
          label="가족이 된 날"
          type="date"
          value={adoptionDate}
          setValue={(value: string) => setAdoptionDate(value)}
        />

        <Input
          label="몸무게"
          type="text"
          value={weight}
          setValue={(value: string) => setWeight(value)}
          placeholder="몸무게를 입력해 주세요"
        />

        <AuthButton type="submit" content="가입하기" disabled={confirm ? true : false} />
      </form>
    </FormContainer>
  );
};
