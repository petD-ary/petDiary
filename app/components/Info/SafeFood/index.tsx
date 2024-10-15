'use client';
import { Fragment } from 'react';
import { useRecoilValue } from 'recoil';

import { MODAL_TYPE } from '@/components/Modal';
import { filterState } from '@/recoil/Info/atoms';
import { useFood } from '@/hooks/queries/useKnowledge';
import GoToSearch from '../Modal/SearchModal/GoToSearch';
import { FoodProps } from '../DangerousFood';
import Link from 'next/link';
import Label from '../Label';
import DocumentAmount from '../DocumentAmount';
import FoodTypeModal from '../Modal/FoodTypeModal';
import Filter from '../Filter';

const SafeFood = () => {
  const { food } = useRecoilValue(filterState);
  const { data, isLoading } = useFood({ type: 'safeFood', foodCookType: food });

  return (
    <Fragment>
      <FoodTypeModal />
      <div className='pt-3 px-5 md:pt-5 md:pb-2'>
        <div className='flex gap-3 items-center pb-4 min-h-12'>
          <DocumentAmount amount={data?.length} />
          <Filter modalType={MODAL_TYPE.INFO_FILTER_FOOD_TYPE} filter='food' />
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
                  {data.tag
                    ? data.tag[Object.keys(data.tag)[0]].map((tag) => (
                        <Label>
                          {tag === 'cooking' ? '조리 필수' : '손질 필수'}
                        </Label>
                      ))
                    : null}
                </div>
              </Link>
            );
          })}
      </div>
    </Fragment>
  );
};

export default SafeFood;
