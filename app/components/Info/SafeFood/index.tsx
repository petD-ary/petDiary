'use client';
import { Fragment } from 'react';
import { useRecoilValue } from 'recoil';

import { MODAL_TYPE } from '@/components/Modal';
import Align from '../Align';
import { alignState } from '@/recoil/Info/atoms';
import { useFood } from '@/hooks/queries/useKnowledge';
import ImportanceModal from '../Modal/ImportanceModal';
import GoToSearch from '../Modal/SearchModal/GoToSearch';
import { FoodProps } from '../DangerousFood';
import Link from 'next/link';
import Label from '../Label';

const SafeFood = () => {
  const { importance } = useRecoilValue(alignState);
  const { data, isLoading } = useFood({ type: 'safeFood', sort: importance });

  return (
    <Fragment>
      <ImportanceModal />
      <div className='pt-3 px-5 md:pt-5 md:pb-2'>
        <div className='flex gap-3 justify-end items-center pb-4'>
          <div className='min-h-8 min-w-8' />
          <Align
            modalType={MODAL_TYPE.INFO_FILTER_IMPORTANCE}
            align='importance'
          />
        </div>
        <GoToSearch tab='safeFood' />
      </div>

      <div className='last:[&_>_div]:border-none'>
        {!isLoading &&
          data?.map((data: FoodProps) => {
            return (
              <Link
                href={`/info/safeFood/${data.id}`}
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
                  {data.tag ? (
                    <Label>{data.tag[Object.keys(data.tag)[0]]}</Label>
                  ) : null}
                </div>
              </Link>
            );
          })}
      </div>
    </Fragment>
  );
};

export default SafeFood;
