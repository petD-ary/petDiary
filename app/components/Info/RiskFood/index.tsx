'use client';

import { useRecoilValue } from 'recoil';

import { MODAL_TYPE } from '@/components/Modal';
import Align from '../Align';
import Filter from '../Filter';
import { Fragment } from 'react';
import { alignState, filterState } from '@/recoil/Info/atoms';
import ModalPetType from '../Modal/PetTypeModal';
import ModalRisk from '../Modal/RiskModal';

const RiskFood = () => {
  const { petType } = useRecoilValue(filterState);
  const { risk } = useRecoilValue(alignState);
  // const { data, isLoading } = useDisease({ petType, risk });

  return (
    <Fragment>
      <ModalPetType />
      <div className='flex justify-between items-center pt-3 px-5 md:pt-5 md:pb-2'>
        <Filter modalType={MODAL_TYPE.INFO_FILTER_PET_TYPE} filter='petType' />
      </div>

      <div className='last:[&_>_div]:border-none'>
        {/* {!isLoading &&
      data?.map((data: DiseaseProps) => (
        <Link
          href={`/info/disease/${data.id}`}
          key={data.id}
          className='cursor-pointer mx-5 py-4 border-b border-extra-deviders flex flex-col gap-2'
        >
          <h3 className='text-subTitle2 font-semibold text-text-title'>
            {data.diagnosisName}
          </h3>
          <p className='text-body2 text-text-secondary'>{data.summary}</p>
          <div className='flex items-center gap-2 text-caption2 font-medium text-text-primary'>
            <span>{data.petType === 'dog' ? '강아지' : '고양이'}</span>
            <Label
              variant={
                data.riskLevel === '높음'
                  ? 'red'
                  : data.riskLevel === '보통'
                    ? 'blue'
                    : 'green'
              }
            >
              {data.riskLevel}
            </Label>
          </div>
        </Link>
      ))} */}
      </div>
    </Fragment>
  );
};

export default RiskFood;
