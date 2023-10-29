"use client";

import Input from "@/components/Input";
import TypeButton from "@/components/Input/\bTypeButton";
import AuthButton from "@/components/Input/AuthButton";
import React, { useState } from "react";
import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";
import { dogBreeds } from "../../../data/BreedList.js";
import { catBreeds } from "../../../data/BreedList.js";

const FormContainer = styled.div`
  width: 100%;
  padding: 48px 0 64px;
  margin: 0 auto;
  font-size: 1.4rem;
`;

const SelectBox = styled.div`
  display: flex;
  gap: 12px;
  > * {
    flex: 1;
    height: 56px;
  }
`;

const CheckBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
  /* 숨겨진 기본 체크박스 숨기기 */
  input[type="checkbox"] {
    display: none;
  }

  /* 커스텀 체크박스 스타일링 */
  label[for="customCheckbox"] {
    display: inline-block;
    padding: 0;
    width: 22px;
    height: 22px;
    margin-right: 8px;
    background-color: #f0f0f0;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;

  label {
    display: block;
    padding: 10px 8px;
    margin-top: 20px;
  }

  select {
    position: relative;
    width: 100%;
    padding: 20px;
    background: #f0f0f0;
    border-radius: 8px;
    outline: none;
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
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const PetInForm = () => {
  const [petType, setPetType] = useState("");
  const [breeds, setBreeds] = useState();
  const [breed, setBreed] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [neutered, setNeutered] = useState(false);
  const [birthday, setBirthday] = useState("");
  const [adoptionDate, setAdoptionDate] = useState("");
  const [weight, setWeight] = useState("");

  const confirm = petType === "" || breed === "" || name === "" || gender === "" || birthday === "";

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const DogSelect = () => {
    return (
      <select value={breed} onChange={(e) => setBreed(e.target.value)} required>
        <option value="">품종을 선택해주세요</option>
        {dogBreeds.map((dog, i) => {
          return (
            <option value={dog} key={i}>
              {dog}
            </option>
          );
        })}
      </select>
    );
  };

  const CatSelect = () => {
    return (
      <select value={breed} onChange={(e) => setBreed(e.target.value)} required>
        <option value="">품종을 선택해주세요</option>
        {catBreeds.map((cat, i) => {
          return (
            <option value={cat} key={i}>
              {cat}
            </option>
          );
        })}
      </select>
    );
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
          {petType === "강아지" ? <DogSelect /> : <CatSelect />}
        </FormGroup>

        <Input
          label="이름*"
          type="text"
          value={name}
          setValue={(value: string) => setName(value)}
          required
          placeholder="이름을 입력해 주세요"
        />

        <FormGroup>
          <label>성별*</label>
          <SelectBox>
            <TypeButton type="남아" selectedType={gender} setType={setGender} />
            <TypeButton type="여아" selectedType={gender} setType={setGender} />
          </SelectBox>
          <CheckBox>
            <input
              type="checkbox"
              id="customCheckbox"
              checked={neutered}
              onChange={(e) => setNeutered(e.target.checked)}
            />
            <label htmlFor="customCheckbox">{neutered ? <BsCheckLg /> : null}</label>
            <label>중성화를 했어요</label>
          </CheckBox>
        </FormGroup>

        <Input
          label="생일*"
          type="date"
          value={birthday}
          setValue={(value: string) => setBirthday(value)}
          required
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

        <AuthButton type="submit" content="가입하기" disabled={confirm} />
      </form>
    </FormContainer>
  );
};
