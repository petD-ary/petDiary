"use client";

import GenderTypeButton from "@/components/Login/Heading/GenderTypeButton";

import PetTypeButton from "@/components/Login/Heading/PetTypeButton copy";
import TypeButton from "@/components/Login/Heading/TypeButton";
import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SelectBox = styled.div`
  display: flex;
  flex: 1;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
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

  input[type="checkbox"] {
    margin-left: 5px;
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

export const PetForm = () => {
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
          <label>반려동물</label>
          <SelectBox>
            <TypeButton type="강아지" selectedType={petType} setType={setPetType} />
            <TypeButton type="고양이" selectedType={petType} setType={setPetType} />
          </SelectBox>
        </FormGroup>

        <FormGroup>
          <label>품종</label>
          <select value={breed} onChange={(e) => setBreed(e.target.value)}>
            <option value="">선택</option>
            <option value="푸들">푸들</option>
            <option value="불독">불독</option>
            <option value="리트리버">리트리버</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>성별</label>
          <div>
            <TypeButton type="남자" selectedType={gender} setType={setGender} />
            <TypeButton type="여자" selectedType={gender} setType={setGender} />
            {/* <button
              type="button"
              onClick={() => setGender("수컷")}
              className={gender === "수컷" ? "active" : ""}
            >
              남자
            </button>
            <button
              type="button"
              onClick={() => setGender("암컷")}
              className={gender === "암컷" ? "active" : ""}
            >
              여자
            </button> */}
          </div>
        </FormGroup>

        <FormGroup>
          <label>중성화를 했어요</label>
          <input type="checkbox" checked={neutered} onChange={(e) => setNeutered(e.target.checked)} />
        </FormGroup>

        <FormGroup>
          <label>생일</label>
          <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <label>가족이 된 날</label>
          <input type="date" value={adoptionDate} onChange={(e) => setAdoptionDate(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <label>몸무게를 입력해 주세요</label>
          <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </FormGroup>

        <button type="submit">가입하기</button>
      </form>
    </FormContainer>
  );
};
