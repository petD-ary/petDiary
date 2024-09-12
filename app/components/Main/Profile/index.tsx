'use client';

import Image from 'next/image';
import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Extra, Title } from '@/constants/Typography/TypographyList';
import dog from '@/assets/images/profile/dog/dog1x.webp';
import dogPng from '@/assets/images/profile/dog/dog.png';
import cat from '@/assets/images/profile/cat/cat1x.webp';
import catPng from '@/assets/images/profile/cat/cat.png';
import { calculateAge } from '@/utils/calculateDay';
import './index.css';
import { MainAnimalHeader } from '@/components/Heading/TypeHeader';
import DDayIcon from './DDayIcon';
import { usePetData } from '@/hooks/queries/usePetData';
import NoContent from '@/components/common/NoContent';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const { data: petData, isLoading, isSuccess } = usePetData();
  const router = useRouter();

  return (
    <Fragment>
      <MainAnimalHeader petCount={petData?.length ?? 0} />
      <div className='overflow-hidden h-[300px] bg-white rounded-xl shadow-level2'>
        {isSuccess && !petData && (
          <NoContent className=''>
            <NoContent.Desc>등록된 반려동물이 없어요</NoContent.Desc>
            <NoContent.Button onClick={() => router.push('/pet-add')}>
              반려동물 추가하기
            </NoContent.Button>
          </NoContent>
        )}
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          mousewheel={true}
          modules={[Pagination, Mousewheel, Navigation]}
          className='max-w-[375px]'
        >
          {petData?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className='flex flex-col items-center gap-3 pt-6 pb-4'>
                  <div className='rounded-full border border-white overflow-hidden w-20 h-20 shadow-level1'>
                    {item.imageUrl ? (
                      <Image
                        src={item.imageUrl}
                        alt='profile'
                        width={80}
                        height={80}
                        priority
                        className='object-cover'
                      />
                    ) : (
                      <picture>
                        <source
                          srcSet={
                            item.petType === '고양이' ? catPng.src : dogPng.src
                          }
                        />
                        <Image
                          src={item.petType === '고양이' ? cat : dog}
                          alt='profile'
                          width={80}
                          height={80}
                          className='object-cover'
                          priority
                        />
                      </picture>
                    )}
                  </div>
                  <div className='flex flex-row items-center gap-2'>
                    {item.birthday && (
                      <div
                        className={`px-2 py-[6px] ${Extra} text-primary-500 bg-primary-50`}
                      >
                        {calculateAge(item.birthday)}살
                      </div>
                    )}
                    <div className={`${Title.title3}`}>{item.name}</div>
                  </div>
                </div>
                <div className='max-w-[375px] mx-auto gap-2 flex justify-center'>
                  {item.birthday && (
                    <>
                      <DDayIcon type='born' dDay={item.birthday} />
                      <DDayIcon type='birth' dDay={item.birthday} />
                    </>
                  )}
                  <DDayIcon type='together' dDay={item.adoptionDate} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {isLoading && <Skeleton />}
      </div>
    </Fragment>
  );
};

const Skeleton = () => (
  <div className='flex flex-col items-center gap-3 pt-6 pb-4'>
    <div className='w-20 h-20 bg-grayColor-100 rounded-full animate-pulse' />
    <div className='w-[60%] h-[22px] bg-grayColor-100 animate-pulse' />
    <div className='w-full gap-2 flex justify-center'>
      {Array.from(Array(3), (_, key) => (
        <div
          key={key}
          className='w-11 h-[84px] my-2 mx-4 flex flex-col items-center [&_div]:animate-pulse [&_div]:bg-grayColor-100'
        >
          <div className='h-11 rounded-2xl w-full'></div>
          <div className='h-[14px] w-2/3 mt-2 mb-1'></div>
          <div className='h-4 w-full'></div>
        </div>
      ))}
    </div>
    <div className='w-8 h-2 m-1 bg-grayColor-100 animate-pulse' />
  </div>
);

export default Profile;
