import Input from '@/components/Input';
import { useModal } from '@/hooks/useModal';
import React, { ChangeEvent, useEffect, useState } from 'react';
import IconDown from '@/assets/images/icon-down.svg';
import Button from '../Button';
import { MODAL_TYPE } from '../Modal';
import { Body } from '@/constants/Typography/TypographyList';
import VariantModal from '../Account/VariantModal';
import { INPUT_TYPE, PetInfoProps, PetObjValue } from './type';
import { useRecoilState } from 'recoil';
import { petInfoState, unknownBirthdayState } from '@/recoil/Account/atoms';

const PetInfo = ({ handleSubmit, submitValue }: PetInfoProps) => {
  const { addModal } = useModal();
  const [unknownBirthday, setUnknownBirthday] =
    useRecoilState(unknownBirthdayState);
  const [petInfo, setPetInfo] = useRecoilState(petInfoState);
  const {
    adoptionDate,
    birthday,
    breed,
    gender,
    name,
    neutered,
    petType,
    weight,
  } = petInfo;

  useEffect(() => {
    if (unknownBirthday) {
      return setPetInfo((prev) => ({ ...prev, birthday: '' }));
    }
  }, [unknownBirthday]);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    const updatedValue: PetObjValue =
      name === INPUT_TYPE.NEUTERED ? checked : value;

    const updatedObj =
      name === INPUT_TYPE.TYPE
        ? { [name]: updatedValue, breed: '' }
        : { [name]: updatedValue };

    return setPetInfo((prev) => ({
      ...prev,
      ...updatedObj,
    }));
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className='py-10 flex flex-col gap-8'
    >
      <VariantModal />

      <Input isRequired name={INPUT_TYPE.TYPE}>
        <Input.Label>반려동물</Input.Label>
        <div className='w-full flex gap-3'>
          <Input.CheckOnlyOneInput
            value='강아지'
            selected={petType}
            onChange={(e) => handleChangeValue(e)}
          />
          <Input.CheckOnlyOneInput
            value='고양이'
            selected={petType}
            onChange={(e) => handleChangeValue(e)}
          />
        </div>
      </Input>

      <Input isRequired name={INPUT_TYPE.BREED}>
        <Input.Label>품종</Input.Label>
        <div
          onClick={() => addModal(MODAL_TYPE.BREED)}
          className='w-full p-4 cursor-pointer rounded-lg border text-text-title border-text-dividers focus:border-text-border transition-colors'
        >
          <p className={`flex justify-between items-center ${Body.body1}`}>
            {breed === '' ? '품종을 선택해 주세요' : breed}
            <span>
              <IconDown />
            </span>
          </p>
        </div>
      </Input>

      <Input isRequired name={INPUT_TYPE.NAME}>
        <Input.Label>아이 이름</Input.Label>
        <Input.TextInput
          placeholder='반려동물의 이름을 입력해 주세요'
          value={name}
          onChange={(e) => handleChangeValue(e)}
        />
      </Input>

      <div className='flex flex-col gap-3'>
        <Input isRequired name={INPUT_TYPE.GENDER}>
          <Input.Label>성별</Input.Label>
          <div className='w-full flex gap-3'>
            <Input.CheckOnlyOneInput
              value='남아'
              selected={gender}
              onChange={(e) => handleChangeValue(e)}
            />
            <Input.CheckOnlyOneInput
              value='여아'
              selected={gender}
              onChange={(e) => handleChangeValue(e)}
            />
          </div>
        </Input>

        <Input name={INPUT_TYPE.NEUTERED}>
          <Input.CheckInput
            checked={neutered}
            onChange={(e) => handleChangeValue(e)}
          >
            중성화 수술을 했나요?
          </Input.CheckInput>
        </Input>
      </div>

      <div className='flex flex-col gap-3'>
        <Input name={INPUT_TYPE.BIRTHDAY}>
          <Input.Label>아이 생일</Input.Label>
          <Input.DateInput
            disabled={unknownBirthday}
            value={birthday}
            onChange={(e) => handleChangeValue(e)}
          />
        </Input>
        <Input name='unknownBirthday'>
          <Input.CheckInput
            id='unknownBirthday'
            checked={unknownBirthday}
            onChange={() => {
              setUnknownBirthday((prev) => !prev);
            }}
          >
            생일을 잘 모르겠어요
          </Input.CheckInput>
        </Input>
      </div>

      <Input isRequired name={INPUT_TYPE.ADOPTIONDATE}>
        <Input.Label>가족이 된 날</Input.Label>
        <Input.DateInput
          value={adoptionDate}
          onChange={(e) => handleChangeValue(e)}
        />
      </Input>

      <Input name={INPUT_TYPE.WEIGHT}>
        <Input.Label>몸무게 입력</Input.Label>
        <Input.TextInput
          placeholder='몸무게를 입력해 주세요'
          value={weight}
          onChange={(e) => handleChangeValue(e)}
        />
        <p
          className={`absolute top-[41px] right-3 text-text-secondary ${Body.body1}`}
        >
          KG
        </p>
      </Input>

      <Button variant='contained' type='submit' isDisabled={!breed || !name}>
        {submitValue}
      </Button>
    </form>
  );
};

export default PetInfo;
