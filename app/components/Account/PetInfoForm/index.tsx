"use client";

import React, { useState } from "react";

import Input from "@/components/Input";
import TypeButton from "@/components/Input/TypeButton";
import AuthButton from "@/components/Input/AuthButton";
import CheckButton from "@/components/Input/CheckButton";

import { dogBreeds } from "../../../data/BreedList.js";
import { catBreeds } from "../../../data/BreedList.js";

import { FormContainer, FormGroup, SelectBox } from "./styled.js";

export const PetInForm = () => {
  const [petType, setPetType] = useState("");
  const [breeds, setBreeds] = useState();
  const [breed, setBreed] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [neutered, setNeutered] = useState<boolean>(false);
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
          <CheckButton label="중성화를 했어요" checked={neutered} setState={setNeutered} />
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
