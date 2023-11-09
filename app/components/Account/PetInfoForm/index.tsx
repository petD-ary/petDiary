'use client';

import React, { useState } from 'react';

import Input from '@/components/Input';
import TypeButton from '@/components/Input/TypeButton';
import AuthButton from '@/components/Input/AuthButton';
import CheckButton from '@/components/Input/CheckButton';
import VariantModal from '@/components/Account/VariantModal';

import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  authObjState,
  stepState,
  variantModalState,
} from '@/recoil/Account/atoms';
import { BsCheckLg } from 'react-icons/bs';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { authService, dbService } from '@/firebase';
import { addDoc, collection } from 'firebase/firestore';

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
  const [authObj, setAuthObj] = useRecoilState(authObjState);
  const { userId, email, password } = authObj;

  const [petObj, setPetObj] = useState<PetObjProps>({
    petType: '강아지',
    breed: '',
    name: '',
    gender: '남아',
    neutered: false,
    birthday: '',
    adoptionDate: '',
    weight: '',
  });
  const {
    petType,
    breed,
    name,
    gender,
    neutered,
    birthday,
    adoptionDate,
    weight,
  } = petObj;

  /* 
  const [petType, setPetType] = useState<string>('강아지');
  const [breed, setBreed] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('남아');
  const [neutered, setNeutered] = useState<boolean>(false);
  const [birthday, setBirthday] = useState('');
  const [adoptionDate, setAdoptionDate] = useState('');
  const [weight, setWeight] = useState('');
 */
  const [modalOpen, setModalOpen] = useRecoilState(variantModalState);
  const setStep = useSetRecoilState(stepState);

  const confirm = breed === '' || name === '' || birthday === '';

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(authService, email, password)
      .then(async (userCredential) => {
        const user = userCredential;

        updateProfile(user.user, { displayName: userId });

        const userInfo = {
          displayname: userId,
          userId: user.user.uid,
          ...petObj,
        };

        await addDoc(collection(dbService, `userInfo`), userInfo);

        setStep((prev) => prev + 1);
      })
      .catch((err) => {
        const errCode = err.code;
        const errMsg = err.message;
      });
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
              setType={(type) =>
                setPetObj((petObj) => ({ ...petObj, petType: type }))
              }
            />
            <TypeButton
              type='고양이'
              selectedType={petType}
              setType={(type) =>
                setPetObj((petObj) => ({ ...petObj, petType: type }))
              }
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
              setBreed={(breed) =>
                setPetObj((petObj) => ({ ...petObj, breed }))
              }
            />
          )}
        </div>

        <Input
          label='이름*'
          type='text'
          value={name}
          setValue={(value: string) =>
            setPetObj((petObj) => ({ ...petObj, name: value }))
          }
          required
          placeholder='이름을 입력해 주세요'
        />

        <div className='mt-5'>
          <label className='block'>성별*</label>
          <div className='flex gap-3 flex-wrap mb-7'>
            <TypeButton
              type='남아'
              selectedType={gender}
              setType={(type) =>
                setPetObj((petObj) => ({ ...petObj, gender: type }))
              }
            />
            <TypeButton
              type='여아'
              selectedType={gender}
              setType={(type) =>
                setPetObj((petObj) => ({ ...petObj, gender: type }))
              }
            />
          </div>
          <CheckButton
            label='중성화를 했어요'
            checked={neutered}
            setState={(value) =>
              setPetObj((petObj) => ({ ...petObj, neutered: value }))
            }
          />
        </div>

        <Input
          label='생일*'
          type='date'
          value={birthday}
          setValue={(value) =>
            setPetObj((petObj) => ({ ...petObj, birthday: value }))
          }
          required
        />

        <Input
          label='가족이 된 날'
          type='date'
          value={adoptionDate}
          setValue={(value) =>
            setPetObj((petObj) => ({ ...petObj, adoptionDate: value }))
          }
        />

        <Input
          label='몸무게'
          type='text'
          value={weight}
          setValue={(value) =>
            setPetObj((petObj) => ({ ...petObj, weight: value }))
          }
          placeholder='몸무게를 입력해 주세요'
        />

        <AuthButton type='submit' content='가입하기' disabled={confirm} />
      </form>
    </div>
  );
};
