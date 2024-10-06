'use client';
import { FormEvent, Fragment, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import { addPet } from '@/apis/petData';
import PetInfo from '@/components/PetInfo';
import { petInfoState, unknownBirthdayState } from '@/recoil/Account/atoms';
import { Title } from '@/constants/Typography/TypographyList';
import IconClose from '@/assets/images/icon-x.svg';
import { usePetInfo } from '@/hooks/queries/usePetInfo';

const AddPetPage = () => {
  const router = useRouter();
  const petInfo = useRecoilValue(petInfoState);
  const resetPetInfo = useResetRecoilState(petInfoState);
  const setUnknownBirthday = useResetRecoilState(unknownBirthdayState);
  const { refetch } = usePetInfo();

  useEffect(() => {
    resetPetInfo();
    setUnknownBirthday();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await addPet(petInfo);
    if (response?.status === 201) {
      resetPetInfo();
      refetch();
      router.back();
    }
  };

  return (
    <Fragment>
      <div className='px-2 py-1 flex justify-between items-center'>
        <div className='w-12' />
        <p className={`text-grayColor-900 ${Title.title3}`}>반려동물 추가</p>
        <div
          className='p-3 cursor-pointer'
          onClick={() => {
            router.back();
          }}
        >
          <IconClose />
        </div>
      </div>

      <div className='h-[calc(100%_-_56px)] px-5 pt-10 overflow-y-auto scrollbar-none'>
        <PetInfo handleSubmit={(e) => handleSubmit(e)} submitValue='확인' />
      </div>
    </Fragment>
  );
};

export default AddPetPage;
