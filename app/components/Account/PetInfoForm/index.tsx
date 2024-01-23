'use client';

import Input from '@/components/Input';

import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react';
import Heading from '../Heading';
import IconDown from '@/assets/images/icon-down.svg';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { nicknameState, stepState, variantModalState } from '@/recoil/Account/atoms';
import VariantModal from '../VariantModal';
import Button from '@/components/Button';

import UpdatedUserData from '@/utils/UpdatedUserData';
import { Body } from '@/components/Typography/TypographyList';
import DatePicker from '@/components/DatePicker';

interface PetObjProps {
  petType: string;
  breed: string;
  name: string;
  gender: string;
  neutered: boolean;
  birthday: string;
  adoptionDate: string;
  weight: string;
}

interface ErrorProps {
  breed: boolean;
  name: boolean;
}

export const PetInForm = () => {
  const setStep = useSetRecoilState(stepState);
  const nickname = useRecoilValue(nicknameState);
  const [isOpen, setIsOpenModal] = useRecoilState(variantModalState);
  const [petInfo, setPetInfo] = useState<PetObjProps>({
    petType: '강아지',
    breed: '',
    name: '',
    gender: '남아',
    neutered: false,
    birthday: '',
    adoptionDate: '',
    weight: '',
  });

  const [error, setError] = useState<ErrorProps>({
    breed: true,
    name: true,
  });

  const [unknownBirthday, setUnknownBirthday] = useState(false);

  const handleUnknownBirthdayCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { checked },
    } = e;

    setUnknownBirthday(checked);
  };

  const handleNeuteredCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { checked },
    } = e;

    setPetInfo((prev) => ({ ...prev, neutered: checked }));
  };

  const handleOnlyOneCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    if (value !== petInfo.gender) return setPetInfo((prev) => ({ ...prev, gender: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      user: { nickname },
      pet: {
        ...petInfo,
      },
    };

    try {
      UpdatedUserData(data);
    } catch (e) {
      return console.log(e);
    }

    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    if (petInfo.breed === '') {
      setError((prev) => ({ ...prev, breed: true }));
    } else {
      setError((prev) => ({ ...prev, breed: false }));
    }
  }, [petInfo.breed]);

  useEffect(() => {
    if (petInfo.name === '') {
      setError((prev) => ({ ...prev, name: true }));
    } else {
      setError((prev) => ({ ...prev, name: false }));
    }
  }, [petInfo.name]);

  return (
    <Fragment>
      {isOpen && (
        <VariantModal
          variant={petInfo.petType}
          breed={petInfo.breed}
          setBreed={(value) => setPetInfo((prev) => ({ ...prev, breed: value }))}
        />
      )}
      <Heading title='반려동물 정보 입력' subTitle='추가 등록은 홈화면-편집에서 가능합니다' />

      <form onSubmit={(e) => handleSubmit(e)} className='py-10 flex flex-col gap-8'>
        <Input onChange={(e) => setPetInfo((prev) => ({ ...prev, petType: e.target.value }))}>
          <Input.Label isRequired>반려동물</Input.Label>
          <div className='w-full flex gap-3'>
            <Input.CheckOnlyOneInput
              value='강아지'
              id='dog'
              name='petType'
              selected={petInfo.petType}
              onChange={(e) => setPetInfo((prev) => ({ ...prev, petType: e.target.value }))}
            />
            <Input.CheckOnlyOneInput
              value='고양이'
              id='cat'
              name='petType'
              selected={petInfo.petType}
              onChange={(e) => setPetInfo((prev) => ({ ...prev, petType: e.target.value }))}
            />
          </div>
        </Input>

        <Input onClick={() => setIsOpenModal(true)}>
          <Input.Label isRequired>품종</Input.Label>
          <div
            onClick={() => setIsOpenModal(true)}
            className='w-full p-4 cursor-pointer rounded-lg border text-text-title border-text-dividers focus:border-text-border transition-colors'
          >
            <p className={`flex justify-between items-center ${Body.body1}`}>
              {petInfo.breed === '' ? '품종을 선택해 주세요' : petInfo.breed}
              <span>
                <IconDown />
              </span>
            </p>
          </div>
        </Input>

        <Input
          value={petInfo.name}
          onChange={(e) => setPetInfo((prev) => ({ ...prev, name: e.target.value }))}
        >
          <Input.Label isRequired>아이 이름</Input.Label>
          <Input.TextInput
            placeholder='반려동물의 이름을 입력해 주세요'
            value={petInfo.name}
            onChange={(e) => setPetInfo((prev) => ({ ...prev, name: e.target.value }))}
          />
        </Input>

        <div className='flex flex-col gap-3'>
          <Input onChange={handleOnlyOneCheck}>
            <Input.Label isRequired>성별</Input.Label>
            <div className='w-full flex gap-3'>
              <Input.CheckOnlyOneInput
                value='남아'
                id='male'
                name='gender'
                selected={petInfo.gender}
                onChange={handleOnlyOneCheck}
              />
              <Input.CheckOnlyOneInput
                value='여아'
                id='female'
                name='gender'
                selected={petInfo.gender}
                onChange={handleOnlyOneCheck}
              />
            </div>
          </Input>

          <Input onChange={handleNeuteredCheck}>
            <Input.CheckInput id='neutered' onChange={handleNeuteredCheck}>
              중성화 수술을 했나요?
            </Input.CheckInput>
          </Input>
        </div>

        <div className='flex flex-col gap-3'>
          <Input>
            <Input.Label>아이 생일</Input.Label>
            <Input.DateInput disabled={unknownBirthday} />
          </Input>
          <DatePicker />
          <Input onChange={handleUnknownBirthdayCheck}>
            <Input.CheckInput id='unknownBirthday' onChange={handleUnknownBirthdayCheck}>
              생일을 잘 모르겠어요
            </Input.CheckInput>
          </Input>
        </div>

        <Input
          value={petInfo.adoptionDate}
          onChange={(e) => setPetInfo((prev) => ({ ...prev, adoptionDate: e.target.value }))}
        >
          <Input.Label isRequired>가족이 된 날</Input.Label>
          <Input.DateInput
            value={petInfo.adoptionDate}
            onChange={(e) => setPetInfo((prev) => ({ ...prev, adoptionDate: e.target.value }))}
          />
        </Input>

        <Input
          value={petInfo.weight}
          onChange={(e) => setPetInfo((prev) => ({ ...prev, weight: e.target.value }))}
        >
          <Input.Label>몸무게 입력</Input.Label>
          <Input.TextInput
            placeholder='몸무게를 입력해 주세요'
            value={petInfo.weight}
            onChange={(e) => setPetInfo((prev) => ({ ...prev, weight: e.target.value }))}
          />
          <p className={`absolute top-[41px] right-3 text-text-secondary ${Body.body1}`}>KG</p>
        </Input>

        <Button variant='contained' type='submit' isDisabled={error.breed || error.name}>
          확인
        </Button>
      </form>
    </Fragment>
  );
};
