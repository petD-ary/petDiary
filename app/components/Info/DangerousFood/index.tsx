'use client';
import { Fragment } from 'react';
import Link from 'next/link';

import { useFood } from '@/hooks/queries/useKnowledge';
import GoToSearch from '../Modal/SearchModal/GoToSearch';
import Label from '../Label';

export interface FoodProps {
  id: number;
  type: 'dangerousFood' | 'safeFood';
  title: { [key: string]: string };
  summary: { [key: string]: string };
  petType: '강아지·고양이' | '강아지' | '고양이';
  tag: { [key: string]: string } | null;
  createdAt: string;
  updatedAt: string;
}

const DangerousFood = () => {
  const { data, isLoading } = useFood({ type: 'dangerousFood' });

  return (
    <Fragment>
      <div className='pt-3 px-5 md:pt-5 md:pb-2'>
        <div className='flex gap-3 justify-end items-center pb-4'>
          <div className='min-h-8 min-w-8' />
        </div>
        <GoToSearch tab='dangerousFood' />
      </div>

      <div className='last:[&_>_div]:border-none'>
        {!isLoading &&
          data?.map((data: FoodProps) => {
            return (
              <Link
                href={`/info/dangerousFood/${data.id}`}
                key={data.id}
                className='mx-5 py-4 border-b border-extra-deviders flex flex-col gap-2'
              >
                <h3 className='text-subTitle2 font-semibold text-text-title'>
                  {data.title[Object.keys(data.title)[0]]}
                </h3>
                <p className='text-body2 text-text-secondary'>
                  {data.summary[Object.keys(data.summary)[0]]}
                </p>
                <div className='flex items-center gap-2 text-caption2 font-medium text-text-primary'>
                  {data.petType && <span>{data.petType}</span>}
                  <Label>위험</Label>
                </div>
              </Link>
            );
          })}
      </div>
    </Fragment>
  );
};

export default DangerousFood;
