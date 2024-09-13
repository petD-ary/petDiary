'use client';
import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';

import { usePetInfo } from '@/hooks/queries/usePetInfo';
import Button from '@/components/Button';
import PetEditModal from '@/components/Main/PetListModal/PetEditModal';
import PetEditCard from '@/components/Main/PetListModal/PetListCard';
import IconClose from '@/assets/images/icon-x.svg';
import { Title } from '@/constants/Typography/TypographyList';
import Loading from '@/components/Loading';

const PetInfoPage = () => {
  const router = useRouter();
  const [selectedData, setSelectedData] = useState<number | null>(null);
  const { data: petData, isSuccess } = usePetInfo();

  if (!isSuccess) return <Loading />;

  return (
    <Fragment>
      <div>
        <div className='px-2 py-1 flex justify-end'>
          <div className='p-3 cursor-pointer' onClick={() => router.back()}>
            <IconClose />
          </div>
        </div>
        <p className={`text-text-title px-5 py-3 ${Title.title2}`}>
          내 반려동물
          <span className='pl-[6px] text-primary-500'>
            {petData?.length ?? 0}
          </span>
        </p>
      </div>
      <div className='px-5'>
        <div className='py-4 pt-5 flex flex-col gap-2'>
          {petData?.map((data) => (
            <PetEditCard
              key={data.id}
              data={data}
              setSelectedData={(id: number) => setSelectedData(id)}
            />
          ))}

          {selectedData ? (
            <PetEditModal
              data={petData?.filter((item) => item.id === selectedData)[0]}
            />
          ) : null}
        </div>

        <Button
          className='border-purple-600 mt-3'
          variant={'outlined'}
          onClick={() => router.push('/pet-info/add-pet')}
          isDisabled={petData && petData?.length >= 5}
        >
          {petData && petData?.length < 5
            ? '반려동물 추가'
            : '더 이상 반려동물을 추가할 수 없어요.'}
        </Button>
      </div>
    </Fragment>
  );
};

export default PetInfoPage;
