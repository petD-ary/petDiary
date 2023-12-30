'use client';

import Input from '@/components/Input';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Heading from '../Heading';
import Body1 from '@/components/Typography/Body1';
import IconDown from '@/assets/images/icon-down.svg';
import { useRecoilState } from 'recoil';
import { variantModalState } from '@/recoil/Account/atoms';
import VariantModal from '../VariantModal';
import getBreedsList from './getBreedsList';

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

export const PetInForm = () => {
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

    if (value !== petInfo.gender)
      return setPetInfo((prev) => ({ ...prev, gender: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      {isOpen && (
        <VariantModal
          variant={petInfo.petType}
          breed={petInfo.breed}
          setBreed={(value) =>
            setPetInfo((prev) => ({ ...prev, breed: value }))
          }
        />
      )}
      <Heading
        title='반려동물 정보 입력'
        subTitle='추가 등록은 홈화면-편집에서 가능합니다'
      />

      <form
        onSubmit={(e) => handleSubmit(e)}
        className='py-10 flex flex-col gap-8'
      >
        <Input
          onChange={(e) =>
            setPetInfo((prev) => ({ ...prev, petType: e.target.value }))
          }
        >
          <Input.Label isRequired>반려동물</Input.Label>
          <div className='w-full flex gap-3'>
            <Input.CheckOnlyOneInput
              value='강아지'
              id='dog'
              name='petType'
              selected={petInfo.petType}
              onChange={(e) =>
                setPetInfo((prev) => ({ ...prev, petType: e.target.value }))
              }
            />
            <Input.CheckOnlyOneInput
              value='고양이'
              id='cat'
              name='petType'
              selected={petInfo.petType}
              onChange={(e) =>
                setPetInfo((prev) => ({ ...prev, petType: e.target.value }))
              }
            />
          </div>
        </Input>

        <Input onClick={() => setIsOpenModal(true)}>
          <Input.Label isRequired>품종</Input.Label>
          <div
            onClick={() => setIsOpenModal(true)}
            className='w-full p-4 cursor-pointer rounded-lg border text-text-title border-text-dividers focus:border-text-border transition-colors'
          >
            <Body1 className='flex justify-between items-center'>
              {petInfo.breed === '' ? '품종을 선택해 주세요' : petInfo.breed}
              <span>
                <IconDown />
              </span>
            </Body1>
          </div>
        </Input>

        <Input>
          <Input.Label isRequired>아이 이름</Input.Label>
          <Input.TextInput placeholder='반려동물의 이름을 입력해 주세요' />
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

          <Input onChange={handleUnknownBirthdayCheck}>
            <Input.CheckInput
              id='unknownBirthday'
              onChange={handleUnknownBirthdayCheck}
            >
              생일을 잘 모르겠어요
            </Input.CheckInput>
          </Input>
        </div>
      </form>
    </div>
  );
};
