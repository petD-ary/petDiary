'use client';

import Input from '@/components/Input';
import { ChangeEvent, FormEvent, useState } from 'react';
import Heading from '../Heading';

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
  const [gender, setGender] = useState<string>('남아');
  console.log('🚀 ~ file: index.tsx:20 ~ PetInForm ~ gender:', gender);
  const [unknownBirthday, setUnknownBirthday] = useState(false);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {};

  const handleOnlyOneCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    if (value !== gender) return setGender(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <Heading
        title='반려동물 정보 입력'
        subTitle='추가 등록은 홈화면-편집에서 가능합니다'
      />

      <form
        onSubmit={(e) => handleSubmit(e)}
        className='py-10 flex flex-col gap-8'
      >
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
                selected={gender}
                onChange={handleOnlyOneCheck}
              />
              <Input.CheckOnlyOneInput
                value='여아'
                id='female'
                name='gender'
                selected={gender}
                onChange={handleOnlyOneCheck}
              />
            </div>
          </Input>

          <Input>
            <Input.CheckInput id='neutered' onChange={handleCheck}>
              중성화 수술을 했나요?
            </Input.CheckInput>
          </Input>
        </div>

        <div className='flex flex-col gap-3'>
          <Input>
            <Input.Label>아이 생일</Input.Label>
            <Input.DateInput />
          </Input>

          <Input>
            <Input.CheckInput id='unknownBirthday' onChange={handleCheck}>
              생일을 잘 모르겠어요
            </Input.CheckInput>
          </Input>
        </div>
      </form>
    </div>
  );
};
