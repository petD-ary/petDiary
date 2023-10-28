"use client";

import Input from "@/components/Input";
import TypeButton from "@/components/Input/\bTypeButton";
import AuthButton from "@/components/Input/AuthButton";
import React, { useState } from "react";
import styled from "styled-components";

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

  input[type="checkbox"] {
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;

  label {
    display: block;
    margin-bottom: 13px;
    font-size: 14px;
  }

  select,
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button.active {
    background-color: #007bff;
    color: white;
  }

  button {
    display: inline-block;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button[type="submit"] {
    background-color: #007bff;
    color: white;
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
          <label>성별 *</label>
          <SelectBox>
            <TypeButton type="남자" selectedType={gender} setType={setGender} />
            <TypeButton type="여자" selectedType={gender} setType={setGender} />
          </SelectBox>
        </FormGroup>

        <FormGroup>
          <CheckBox>
            <input type="checkbox" checked={neutered} onChange={(e) => setNeutered(e.target.checked)} />
            <label>중성화를 했어요</label>{" "}
          </CheckBox>
        </FormGroup>

        <FormGroup>
          <label>생일*</label>
          <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <label>가족이 된 날</label>
          <input type="date" value={adoptionDate} onChange={(e) => setAdoptionDate(e.target.value)} />
        </FormGroup>

        <Input
          label="몸무게"
          type="text"
          value={weight}
          setValue={(value: string) => setWeight(value)}
          placeholder="몸무게를 입력해 주세요"
        />

        <AuthButton type="submit" content="가입하기" />
      </form>
    </FormContainer>
  );
};
