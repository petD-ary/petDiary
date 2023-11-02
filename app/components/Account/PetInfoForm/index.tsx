'use client';

import React, { useState } from 'react';

import Input from '@/components/Input';
import TypeButton from '@/components/Input/TypeButton';
import AuthButton from '@/components/Input/AuthButton';
import CheckButton from '@/components/Input/CheckButton';
import VariantModal from '@/components/Account/VariantModal';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { stepState, variantModalState } from '@/recoil/atoms';
import { BsCheckLg } from 'react-icons/bs';

export const PetInForm = () => {
  const [petType, setPetType] = useState<string>('강아지');
  const [breeds, setBreeds] = useState();
  const [breed, setBreed] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('남아');
  const [neutered, setNeutered] = useState<boolean>(false);
  const [birthday, setBirthday] = useState('');
  const [adoptionDate, setAdoptionDate] = useState('');
  const [weight, setWeight] = useState('');

  const [modalOpen, setModalOpen] = useRecoilState(variantModalState);
  const setStep = useSetRecoilState(stepState);

  const confirm = breed === '' || name === '' || birthday === '';

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  return (
    <div className='w-full pt-6 pb-16  text-1.4rem [&_label]:pl-2 [&_label]:pb-2'>
      <form className='mt-6' onSubmit={handleSubmit}>
        <div className='mt-5'>
          <label className='block'>반려동물*</label>
          <div className='flex gap-3 flex-wrap'>
            <TypeButton
              type='강아지'
              selectedType={petType}
              setType={setPetType}
            />
            <TypeButton
              type='고양이'
              selectedType={petType}
              setType={setPetType}
            />
          </div>
        </div>

        <div className='mt-5'>
          <label className='block'>품종*</label>
          <div
            onClick={() => setModalOpen(true)}
            className='relative flex justify-between items-center w-full p-5 bg-grayColor-100 rounded-xl focus:outline-none appearance-none cursor-pointer'
          >
            {breed === '' ? '품종을 선택해주세요' : breed}
            <BsCheckLg
              className={`${
                breed !== '' ? 'text-green-500' : 'text-grayColor-300'
              }`}
            />
          </div>
          {modalOpen && (
            <VariantModal
              variant={petType}
              setBreed={(breed) => setBreed(breed)}
            />
          )}
        </div>

        <Input
          label='이름*'
          type='text'
          value={name}
          setValue={(value: string) => setName(value)}
          required
          placeholder='이름을 입력해 주세요'
        />

        <div className='mt-5'>
          <label className='block'>성별*</label>
          <div className='flex gap-3 flex-wrap mb-7'>
            <TypeButton type='남아' selectedType={gender} setType={setGender} />
            <TypeButton type='여아' selectedType={gender} setType={setGender} />
          </div>
          <CheckButton
            label='중성화를 했어요'
            checked={neutered}
            setState={setNeutered}
          />
        </div>

        <Input
          label='생일*'
          type='date'
          value={birthday}
          setValue={(value: string) => setBirthday(value)}
          required
        />

        <Input
          label='가족이 된 날'
          type='date'
          value={adoptionDate}
          setValue={(value: string) => setAdoptionDate(value)}
        />

        <Input
          label='몸무게'
          type='text'
          value={weight}
          setValue={(value: string) => setWeight(value)}
          placeholder='몸무게를 입력해 주세요'
        />

        <AuthButton type='submit' content='가입하기' disabled={confirm} />
      </form>
    </div>
  );
};
