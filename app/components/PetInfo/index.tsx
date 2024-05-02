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
import { CalendarInput } from '../Input/calendar/CalendarInput';
import CalendarForm from '../Calendar/CalendarForm';
import { handleformattedDate } from '../Account/PetInfoForm';

const PetInfo = ({ handleSubmit, submitValue, deleteBtn }: PetInfoProps) => {
  const { addModal } = useModal();
  const [showCalendar, setShowCalendar] = useState({
    birthday: false,
    family: false,
  });

  // 캘린더 토글
  // 생일 캘린더 열기/닫기
  const handleToggleBirthdayCalendar = () => {
    setShowCalendar((prevShowCalendar) => ({
      ...prevShowCalendar,
      birthday: !prevShowCalendar.birthday,
      family: false,
    }));
  };

  // 가족된지 캘린더 열기/닫기
  const handleToggleFamilyCalendar = () => {
    setShowCalendar((prevShowCalendar) => ({
      ...prevShowCalendar,
      family: !prevShowCalendar.family,
      birthday: false,
    }));
  };

  //  생일 데이터 추가
  const handleBirthClick = (data: Date) => {
    const formattedDate = handleformattedDate(data);
    setPetInfo((prev: any) => ({ ...prev, birthday: formattedDate }));
    handleToggleBirthdayCalendar();
  };

  //  가족된 날짜 데이터 추가
  const handleAdoptionlick = (data: Date) => {
    const formattedDate = handleformattedDate(data);
    setPetInfo((prev: any) => ({ ...prev, adoptionDate: formattedDate }));
    handleToggleFamilyCalendar();
  };

  const [unknownBirthday, setUnknownBirthday] =
    useRecoilState(unknownBirthdayState);
  const [petInfo, setPetInfo] = useRecoilState(petInfoState);
  const { breed, gender, name, neutered, petType, weight } = petInfo;

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

      {/* 아이 생일 */}
      <div className='flex flex-col gap-3'>
        <CalendarInput
          label={'아이 생일'}
          selectedDate={petInfo.birthday}
          onClick={handleToggleBirthdayCalendar}
          disabled={unknownBirthday}
        />
        {showCalendar.birthday && (
          <div className='bg-grayColor-10 rounded-lg'>
            <CalendarForm
              handleDayClick={(day: Date) => handleBirthClick(day)}
              initDate={new Date(petInfo.birthday)}
              headerType='center'
            />
          </div>
        )}
        <Input name={INPUT_TYPE.BIRTHDAY}>
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

      {/* 가족이 된 날 */}
      <div className='flex flex-col gap-3'>
        <CalendarInput
          label={'가족이 된 날'}
          selectedDate={petInfo.adoptionDate}
          onClick={handleToggleFamilyCalendar}
          disabled={showCalendar.family}
        />
        {showCalendar.family && (
          <div className='bg-grayColor-10 rounded-lg'>
            <CalendarForm
              handleDayClick={(day: Date) => handleAdoptionlick(day)}
              initDate={new Date(petInfo.adoptionDate)}
              headerType='center'
            />
          </div>
        )}
      </div>

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

      {deleteBtn && (
        <Button
          variant='delete'
          type='button'
          onClick={() => addModal(MODAL_TYPE.PET_DELETE)}
        >
          떠나보내기
        </Button>
      )}
      <Button variant='contained' type='submit' isDisabled={!breed || !name}>
        {submitValue}
      </Button>
    </form>
  );
};

export default PetInfo;
