'use client';

import { FormEvent, Fragment } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import updatedUserData from '@/components/Account/PetInfoForm/UpdatedUserData';
import { nicknameState, petInfoState, stepState } from '@/recoil/Account/atoms';
import Heading from '../Heading';
import PetInfo from '@/components/PetInfo';

export interface PetObjProps {
  petType: string;
  breed: string;
  name: string;
  gender: string;
  neutered: boolean;
  birthday: string;
  adoptionDate: string;
  weight: string;
}

const PetInfoForm = () => {
  const setStep = useSetRecoilState(stepState);
  const nickname = useRecoilValue(nicknameState);
  const petInfo = useRecoilValue(petInfoState);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      user: { nickname },
      pet: {
        ...petInfo,
      },
    };

    try {
      await updatedUserData(data);
    } catch (e) {
      return console.log(e);
    }

    setStep((prev) => prev + 1);
  };

  return (
    <Fragment>
      <Heading
        title='반려동물 정보 입력'
        subTitle='추가 등록은 홈화면-편집에서 가능합니다'
      />

      <PetInfo handleSubmit={handleSubmit} submitValue='확인' />
    </Fragment>
  );
};

export default PetInfoForm;
